<script setup>
//import html2pdf from "html2pdf.js"
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { ref, onMounted, toRaw } from 'vue';
import { useRoute, /*useRouter*/ } from 'vue-router'
import axios from 'axios';
const route = useRoute();
//const router = useRouter();
const evaluationResults = ref([]);
const ownerId = ref();
const EvaluationDescprition = ref("A continuación se presentan los resultados de la evaluación de usabilidad, utilizando el método de prueba denominado analisis heuristico. Se muestra la tabla de resultados con sus respectivos niveles de criterios de usabilidad");
//const exportValues = ref();
//pdf checklist
const mostrarPDFDesdeCache = () => {
    const cachedPDF = localStorage.getItem('cachedPDF');
    if (cachedPDF) {
        window.open(cachedPDF, '_blank');
    } else {
        console.log('No hay PDF en caché');
    }
};

// Función para abrir el PDF tabla de problemas guardado en caché
const openCachedPDF = () => {
  // Obtiene el PDF URL guardado en caché
  const cachedPDFUrl = localStorage.getItem('cachedPDF');

  if (cachedPDFUrl) {
    // Abre una nueva ventana con la vista previa del PDF guardado en caché
    window.open(cachedPDFUrl, '_blank');
  } else {
    // No se encontró ningún PDF en caché, muestra un mensaje de error o maneja la situación de otra manera
    console.error('No hay PDF guardado en caché.');
  }
};

onMounted(() => {
    ownerId.value = route.params.ownerId
    getEvaluationResults();

})

const getEvaluationResults = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:5000/evaluations/${ownerId.value}`);
        evaluationResults.value = response.data;
        console.log("Informacion del get", evaluationResults.value);
    } catch (error) {
        console.error("Error al obtener los resultados de la evaluación:", error);
    }
};
const infode = () => {
    const valuesArray = toRaw(evaluationResults.value).map(obj => Object.values(obj));
    let arreglofinal = [['Código', 'Descripción', 'Heuristica Incumplida', 'Criticismo', 'Frecuencia', "Severidad", 'Incidentes']];
    valuesArray.forEach(value => {
        arreglofinal.push([value[5], value[1], value[3], value[0], value[2], value[6], value[4]]);
    });
    var dd = {
        content: [
            { text: 'Tables', style: 'header' },
            EvaluationDescprition.value,
            { text: 'Resultados Evaluacioon', style: 'subheader' },
            'Resultado de la evaluacion',
            {
                style: 'tableExample',
                table: {
                    body: arreglofinal
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        },
        defaultStyle: {
            // alignment: 'justify'
        }
    }
    pdfMake.createPdf(dd).open();

};
const exportPDF = () => {
    infode();
}
</script>

<template>
    <div class="container-fluid">
    <div class="row">
        <div class="col">
            <button class="btn btn-success" @click="openCachedPDF()">Descargar PDF Gráfica/cálculos tabla problemas</button>
            <button class="btn btn-success" @click="exportPDF()">Descargar PDF Tabla Problemas</button>
            <button class="btn btn-success" @click="mostrarPDFDesdeCache()">Descargar PDF lista de chequeo </button>
        </div>
       
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Resultados</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">{{ EvaluationDescprition }}</p>
                </div>
                </div>
                <div class="card mt-3">
                    <div class="card-header">
                        <h6 class="card-title">Evaluaciones</h6>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-warning">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Descripción</th>
                                    <th>Heuristica Incumplida</th>
                                    <th>Criticismo</th>
                                    <th>Frecuencia</th>
                                    <th>Severidad</th>
                                    <th>Incidentes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="evaluation in evaluationResults" :key="evaluation.name">
                                    <td>{{ evaluation.name }}</td>
                                    <td>{{ evaluation.description }}</td>
                                    <td>{{ evaluation.hi }}</td>
                                    <td>{{ evaluation.criticism }}</td>
                                    <td>{{ evaluation.frequency }}</td>
                                    <td>{{ evaluation.severity }}</td>
                                    <td>{{ evaluation.incidents }}</td>
                                    
                                  

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>