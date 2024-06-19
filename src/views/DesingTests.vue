<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
    console.log("cositas ");
    refreshOwnersList();
});

const form = ref({
    name: '',
    url: '',
    description: '',
});
const errors = ref({
    name: '',
    url: '',
    description: '',
});

const owners = ref([]);
const handleSaveHTest = async () => {
    errors.value = {}; // Reinicia los errores antes de la validación

    if (!form.value.name) {
        errors.value.name = 'El nombre de la prueba es obligatorio.';
    }

    if (!form.value.url) {
        errors.value.url = 'La URL es obligatoria.';
    }
    if (!form.value.description) {
        errors.value.description = 'La Descripcion es obligatorio.';
    }

    // Verifica si hay errores
    if (Object.values(errors.value).some(error => error !== '')) {
        return; // Detiene el proceso si hay errores de validación
    }

    // Si no hay errores, procede con la solicitud HTTP
    const response = await axios.post(' http://127.0.0.1:8000/api/desingtests', {
        name: form.value.name,
        url: form.value.url,
        description: form.value.description
    });

    console.log(response);

    // Después de guardar, obtén nuevamente la lista de propietarios
    await refreshOwnersList();
};
const refreshOwnersList = async () => {
    const rgetallproducts = await axios.get('http://127.0.0.1:5000/desingtests');
    owners.value = rgetallproducts.data.owners; // Asigna los datos correctamente

};

const CreateQuestionary = (user) => {
    console.log(user.id);
    router.push('/o/' + user.id + '/cuestionario');
}
</script>

<template>
    <h1 class="text-center">Gestion pruebas de Diseño</h1>
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="handleSaveHTest">
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre de la prueba de diseño</label>
                    <input type="text" class="form-control" v-model="form.name" id="name" aria-describedby="nameHelp">
                    <div class="text-danger">{{ errors.name }}</div>
                </div>
                <div class="mb-3">
                    <label for="url" class="form-label">Enlace de Figma</label>
                    <input type="text" class="form-control" v-model="form.url" id="url" aria-describedby="emailHelp">
                    <div class="text-danger">{{ errors.url }}</div>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Descripcion de la prueba de diseño</label>
                    <input type="text" class="form-control" v-model="form.description" id="description"
                        aria-describedby="emailHelp">
                    <div class="text-danger">{{ errors.description }}</div>
                </div>

                <button type="submit" class="btn btn-primary">Añadir Prueba de diseño</button>
            </form>

        </div>
    </div>
    <div class="card mt-3">
        <div class="card-body">
            <table class="table table-primary table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Url</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="owner in owners" :key="owner.id">
                        <td>{{ owner.name }}</td>
                        <td>{{ owner.url }}</td>
                        <td>{{ owner.description }}</td>
                        <td>
                            <button @click="CreateQuestionary(owner)" class="btn btn-primary">Crear Cuestionario</button>
                            <!-- <button @click="goToEvaluate(owner.id)" class="btn btn-success">Evaluar</button>
                            <button @click="goToEvaluationResults(owner.id)" class="btn btn-warning">Resultados</button>
                            <button @click="handleDeleteHTest(owner.id)" class="btn btn-danger">
                                Eliminar
                            </button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
