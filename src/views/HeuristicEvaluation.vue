<!-- eslint-disable no-undef -->
<!-- eslint-disable no-unused-vars -->

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Chart from 'chart.js/auto';

const route = useRoute();
const router = useRouter();
const problems = ref([]);
const observations = ref([]);

const options = ref([
  { text: '0', value: 0 },
  { text: '1', value: 1 },
  { text: '2', value: 2 },
  { text: '3', value: 3 },
  { text: '4', value: 4 },
]);

onMounted(async () => {
  console.log("mounted");
  await Promise.all([getallproblems(), getObservations()]);
  updatePieChart();
});


const saveEvaluation = async () => {
  const ownerid = route.params.ownerId;
  console.log("evaluacion guardada ", problems.value);
  try {
    const response = await axios.post(`http://127.0.0.1:5000/evaluations/${ownerid}`, problems.value);
    console.log(response);
    router.push(`/o/${ownerid}/resultadoevaluacion`);
  } catch (error) {
    console.error(error);
  }
};

const getallproblems = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/identifyproblems/${route.params.ownerId}`);
    problems.value = response.data;
    console.log("Problems:", problems.value);
  } catch (error) {
    console.error("Error fetching problems:", error);
  }
};

const getObservations = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/getobservations/${route.params.ownerId}`);
    observations.value = response.data;
    console.log("Observations:", observations.value);
  } catch (error) {
    console.error("Error fetching observations:", error);
  }
};

// calcular la suma de cada columna
const getColumnSum = (columnName) => {
  return problems.value.reduce((sum, item) => {
    return sum + parseFloat(item[columnName] || 0);
  }, 0);
};

// Computed properties para porcentajes
const getPercentage = (column) => {
  const total = problems.value.length;
  return total === 0 ? '0%' : ((getColumnSum(column) / total) * 100).toFixed(2) + '%';
};
const getCriticismPercentage = () => {
  const totalProblems = problems.value.length;
  return (getColumnSum('criticism') / totalProblems) * 100;
};

const getRecommendation = () => {
  const frequencyPercentage = parseFloat(getPercentage('frequency'));

  if (frequencyPercentage < 1) {
    return 'No es un problema de usabilidad.';
  } else if (frequencyPercentage <= 10) {
    return 'Problema "Cosmético"; no necesita ser resuelto a menos que se disponga de tiempo extra en el proyecto.';
  } else if (frequencyPercentage <= 50) {
    return 'Problema de usabilidad menor: arreglarlo tiene baja prioridad.';
  } else if (frequencyPercentage <= 90) {
    return 'Problema de usabilidad mayor: es importante arreglarlo.';
  } else {
    return 'Problema de usabilidad catastrófico: es imperativo arreglarlo antes de que el producto sea liberado.';
  }
};


// const calculateChartData = () => {
//   const totalProblems = problems.value.length;

//   const severityPercentage = (getColumnSum('severity') / totalProblems) * 100;
//   const frequencyPercentage = (getColumnSum('frequency') / totalProblems) * 100;
//   const criticismPercentage = (getColumnSum('criticism') / totalProblems) * 100;

//   return {
//     labels: ['Severity', 'Frequency', 'Criticism'],
//     datasets: [{
//       data: [severityPercentage, frequencyPercentage, criticismPercentage],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     }],
//   };
// };

// const chartData = ref(null);

// const updatePieChart = () => {
//   const canvas = document.getElementById('pieChart');

//   if (!canvas) {
//     console.error("Canvas element 'pieChart' not found.");
//     return;
//   }

//   const ctx = canvas.getContext('2d');

//   if (chartData.value instanceof Chart) {
//     chartData.value.destroy();
//   }

//   const chartConfig = {
//     type: 'pie',
//     data: calculateChartData(),
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       tooltips: {
//         callbacks: {
//           label: (tooltipItem, data) => {
//             const dataset = data.datasets[tooltipItem.datasetIndex];
//             const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
//             const currentValue = dataset.data[tooltipItem.index];
//             const percentage = ((currentValue / total) * 100).toFixed(2);
//             return `${data.labels[tooltipItem.index]}: ${percentage}%`;
//           },
//         },
//       },
//     },
//   };

//   chartData.value = new Chart(ctx, chartConfig);
// };


</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Tabla de problemas</h1>
         
                    <h6>Se traen los Principios que se estan inclumpliento, ¿De donde salen? de la prueba que realiza el
                        evaluador. Un vez
                        se identifican que los problemas mostrados en la tabla son los mismos que se marcaron en la
                        evaluación, se procede a
                        evaluar cada uno de los problemas para hallar el nivel de usabilidad en el que esta la plataforma
                    </h6>

          <div class="container">
            <table class="table table-danger">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Heuristica Incumplida</th>
                  <th>Incidencias</th>
                  <th>Severidad</th>
                  <th>Frecuencia</th>
                  <th>Criticidad</th>
                </tr>
              </thead>
              <!-- Table body -->
              <tbody>
                <!-- Rows for displaying problems -->
                <tr v-for="item in problems" :key="item.name">
                  <!-- Displaying problem details and dropdowns -->
                  <td>{{ item.name }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.hi }}</td>
                  <td>{{ item.incidents }}</td>
                  <td>
                    <div>
                      <select class="form-select" id="severitySelect" aria-label="Severity select"
                        v-model="item.severity">
                        <option v-for="option in options" :key="option.value" :value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <select class="form-select" id="frequencySelect" aria-label="Frequency select"
                        v-model="item.frequency">
                        <option v-for="option in options" :key="option.value" :value="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td>{{ item.criticism = parseInt(item.severity) + parseInt(item.frequency) }}</td>
                </tr>
  
                <!-- Total row -->
                <tr>
                  <td>Total:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{{ getColumnSum('severity') }}</td>
                  <td>{{ getColumnSum('frequency') }}</td>
                  <td>{{ getColumnSum('criticism') }}</td>
                </tr>
  
                <!-- Percentage row -->
                <tr>
                  <td>Percentage:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{{ getPercentage('severity') }}</td>
                  <td>{{ getPercentage('frequency') }}</td>
                  <td>{{ getPercentage('criticism') }}</td>
                </tr>
  
                <!-- Display recommendations based on frequency -->
                <tr>
                  <td>Recommendation:</td>
                  <td colspan="6">{{ getRecommendation() }}</td>
                </tr>
              </tbody>
            </table>
  
            <button class="btn btn-primary" @click="saveEvaluation()">Guardar evaluacion</button>
          </div>
        </div>
      </div>
  
      <div class="col-sm-12">
        <h1>Evaluación de Problemas</h1>
  
        <div class="container">
          <h1>Escala de severidad y frecuencia</h1>
          <h6>Descripción de la tabla</h6>
          <table class="table table-warning" :style="{ width: '600px', height: '300px' }">
            <thead>
              <tr>
                <th scope="col">Nota</th>
                <th scope="col">Severidad</th>
                <th scope="col">Frecuencia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">0</th>
                <td>No es un problema de usabilidad.</td>
                <td>{{ "<" }}1%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Problema "Cosmético"; no necesita ser resuelto a menos que se disponga de tiempo extra en el proyecto.
                </td>
                <td>1-10%</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Problema de usabilidad menor: arreglarlo tiene baja prioridad.</td>
                <td>11-50%</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Problema de usabilidad mayor: es importante arreglarlo.</td>
                <td>51-90%</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Problema de usabilidad catastrófico: es imperativo arreglarlo antes de que el producto sea liberado.</td>
                <td>{{ "<" }}90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
    <!-- Pie Chart
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>gráfica porcentajes</h1>
          <canvas id="pieChart" width="800" height="800"></canvas>
        </div>
      </div>
    </div>  -->
  </template>