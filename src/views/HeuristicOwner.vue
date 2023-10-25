<template>
  <h1>Crea tu prueba de analisis heuristico</h1>
  <h2>Añadir prueba</h2>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <form @submit.prevent="handleSaveHTest">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre de la prueba</label>
            <input type="text" class="form-control" v-model="form.name" id="name" aria-describedby="nameHelp">
            <div id="nameHelp" class="form-text">Ingrese .</div>
            <div class="text-danger">{{ errors.name }}</div>
          </div>
          <div class="mb-3">
            <label for="url" class="form-label">Url</label>
            <input type="text" class="form-control" v-model="form.url" id="url" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            <div class="text-danger">{{ errors.url }}</div>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Descripcion</label>
            <input type="text" class="form-control" v-model="form.description" id="description"
              aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            <div class="text-danger">{{ errors.description }}</div>
          </div>

          <button type="submit" class="btn btn-primary">Añadir Prueba</button>
        </form>
      </div>
      <div class="col-sm-6">
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
                <button @click="copylink(owner)" class="btn btn-primary">Ir a Encuesta</button>
                <button @click="goToEvaluate(owner.id)" class="btn btn-success">Evaluar</button>
                <button @click="goToEvaluationResults(owner.id)" class="btn btn-warning">Resultados</button>
                <button @click="handleDeleteHTest(owner.id)" class="btn btn-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'

const router = useRouter();
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
  const response = await axios.post('http://127.0.0.1:5000/owners', {
    name: form.value.name,
    url: form.value.url,
    description: form.value.description
  });

  console.log(response);

  // Después de guardar, obtén nuevamente la lista de propietarios
  await refreshOwnersList();
};

const handleDeleteHTest = async (id) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:5000/owners/${id}`);
    console.log(response);

    // Después de eliminar, actualiza la lista de propietarios
    await refreshOwnersList();
  } catch (error) {
    console.error('Error al eliminar:', error);
  }
};

const copylink = (owner) => {
  console.log("presionadocopybutton", owner.id)
  var url = "/o/" + owner.id + "/checklist"
  router.push(url);
}

const goToEvaluate = (ownerId) => {
  console.warn(ownerId);
  router.push('/o/' + ownerId + '/evaluacion');
}
const refreshOwnersList = async () => {
  const rgetallproducts = await axios.get('http://127.0.0.1:5000/owners');
  owners.value = rgetallproducts.data.owners; // Asigna los datos correctamente

  console.log(owners.value);
};

const goToEvaluationResults = (ownerId) => {
  console.warn(ownerId);
  router.push('/o/' + ownerId + '/resultadoevaluacion');
}
onMounted(async () => {
  // Cuando el componente se monta, obtén la lista de propietarios
  await refreshOwnersList();
});



</script>
