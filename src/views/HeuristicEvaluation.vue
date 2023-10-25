<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const problems = ref([]);
const observations = ref([]);

onMounted(() => {
    console.log("mondado");
    getallproblems();
    getObservations();
});

const saveEvaluation = async () => {
    const ownerid = route.params.ownerId;
    console.log("evaluacion guardada ", problems.value)
    await axios.post('http://127.0.0.1:5000/evaluations/' + ownerid, problems.value).then(response => {
        console.log(response);
        router.push('/o/' + ownerid + '/resultadoevaluacion');
    }).catch()
}

const getallproblems = async () => {
    await axios.get('http://127.0.0.1:5000/identifyproblems/' + route.params.ownerId).then(response => {
        problems.value = response.data;
        console.log(problems.value);
    }
    ).catch()
}

const getObservations = async () => {
    await axios.get('http://127.0.0.1:5000/getobservations/' + route.params.ownerId).then(
        response => {
            observations.value = response.data
        }
    )
}
const options = ref([
    { text: '0', value: 0 },
    { text: '1', value: 1 },
    { text: '2', value: 2 },
    { text: '3', value: 3 },
    { text: '4', value: 4 },
])

</script>

<template>
    <div class="container ">
        <div class="row">
            <div class="col-sm-12">
                <h1>Tabla de problemas</h1>

                <div class="container">
                    <h6>Se traen los Principios que se estan inclumpliento, ¿De donde salen? de la prueba que realiza el
                        evaluador. Un vez
                        se identifican que los problemas mostrados en la tabla son los mismos que se marcaron en la
                        evaluación, se procede a
                        evaluar cada uno de los problemas para hallar el nivel de usabilidad en el que esta la plataforma
                    </h6>

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
                        <tbody>
                            <tr v-for="item in problems" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>{{ item.description }}</td>
                                <td>{{ item.hi }}</td>
                                <td>{{ item.incidents }}</td>
                                <td>
                                    <div class="">
                                        <select class="form-select" id="floatingSelect"
                                            aria-label="Floating label select example" v-model="item.severity">
                                            <option v-for="option in options" :key="option.value" :value="option.value">
                                                {{ option.text }}
                                            </option>
                                        </select>

                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        <select class="form-select" id="floatingSelect"
                                            aria-label="Floating label select example" v-model="item.frequency">
                                            <option v-for="option in options" :key="option.value" :value="option.value">
                                                {{ option.text }}
                                            </option>
                                        </select>

                                    </div>
                                </td>
                                <td> {{ item.criticism=item.severity + item.frequency }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-primary" @click="saveEvaluation()">Guardar evaluacion</button>
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
                                <td>Problema "Cosmético"; no necesita ser resuelto a menos que se disponga de tiempo extra
                                    en el
                                    proyecto.</td>
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
                                <td>Problema de usabilidad catastrófico: es imperativo arreglarlo antes de que el producto
                                    sea
                                    liberado.</td>
                                <td>{{ "<" }}90%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>