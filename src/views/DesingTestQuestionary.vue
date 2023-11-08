<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();

const questionList = ref([]);
onMounted(() => {
    console.log(route.params.ownerId);
    console.log(questionList);
});
const question = ref({
    title: '',
    description: ''
})

function addTodo() {
    console.log(question.value);
    questionList.value.push(question.value);
    question.value = { title: '', description: '' };
    console.log(questionList.value);
}
function removeQuestion(question) {
    console.log(question.value);
}
function updateQuestion(question) {
    console.log(question.value);
    console.log("actualizar esta", question.value)

}

</script>
<template>
    <main>
        <h1>Crear Cuestionario</h1>
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="addTodo">
                    <input type="text" class="form-control" v-model="question.title">
                    <input type="text" class="form-control" v-model="question.description">
                    <button class="btn btn-success">Añadir pregunta</button>
                </form>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <ul>
                    <div v-for="question in questionList" :key="question.id">
                        <div class="card mt-3">
                            <div class="card-header">
                                <h5>{{ question.title }}</h5>
                            </div>
                            <div class="card-body ">
                                <p>{{ question.description }}</p>
                                <p>La pregunta sera respondida con si y no</p>

                                <button class="btn btn-primary m-3" @click="updateQuestion(question)">Editar
                                    Pregunta</button>
                                <button class="btn btn-danger " @click="removeQuestion(question)">Eliminar Pregunta</button>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        <div>
            <button class="btn btn-primary">Guardar Preguntas</button>
        </div>
    </main>
</template>
