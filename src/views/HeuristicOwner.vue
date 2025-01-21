<template>
 
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6" v-if="rol === 'administrator'">
        <form @submit.prevent="handleSaveHTest">
          <h3>Crea tu prueba de análisis heurístico</h3>
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
      </div>

      <div class="col-sm-6" v-if="rol === 'evaluator'">
  <!-- Formulario para el evaluador -->
  <form @submit.prevent="handleSaveEvaluadorTest" v-if="rol==='evaluator'">
    <h1>información del usuario Evaluador</h1>
    <div class="mb-3">
      <label for="age" class="form-label">Edad</label>
      <input type="text" class="form-control" v-model="evaluadorForm.age" id="age">
    </div>
    <div class="mb-3">
      <label for="profession" class="form-label">Profesión</label>
      <input type="text" class="form-control" v-model="evaluadorForm.profession" id="profession">
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Estatus</label>
      <input type="text" class="form-control" v-model="evaluadorForm.status" id="status">
    </div>
    <div class="mb-3">
      <label for="technologyExperience" class="form-label">Experiencia tecnológica</label>
      <input type="text" class="form-control" v-model="evaluadorForm.technological_experience" id="technologyExperience">
    </div>
  
    <div class="mb-3">
      <label for="description">Descripción/persoanlidad</label>
      <textarea class="form-control" v-model="evaluadorForm.personality_description" id="description" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="objectives">Objetivos</label>
      <textarea class="form-control" v-model="evaluadorForm.goals" id="objectives" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="habits">Hábitos, habilidades y frustraciones</label>
      <textarea class="form-control" v-model="evaluadorForm.habits" id="habits" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click="handleSaveEvaluadorTest">Guardar</button>

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
<button @click="copylink(owner)" class="btn btn-primary" v-if="rol === 'evaluator' || rol === 'administrator'">Ir a Encuesta</button>
<button @click="goToEvaluate(owner.id)" class="btn btn-success" v-if="rol === 'owner'|| rol === 'administrator'">Evaluar</button>
<button @click="goToEvaluationResults(owner.id)" class="btn btn-warning" v-if="rol === 'owner'|| rol === 'administrator'">Resultados</button>
<button @click="handleDeleteHTest(owner.id)" class="btn btn-danger" v-if="rol === 'administrator' || rol === 'evaluator'|| rol === 'owner'">Eliminar</button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';

const authStore = useAuthStore();
const router = useRouter();
const username = ref('');
const rol = ref('');
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

const obtenerUsuarioLogueado = () => {
  username.value = localStorage.getItem('username');

};

onMounted(() => {
  obtenerUsuarioLogueado();
});

const evaluadorForm = computed(() => ({
  username: username.value,
  age: '',
  profession: '',
  status: '',
  technological_experience: '',
  personality_description: '',
  description: '',
  goals: '',
  habits: '',
}));

// Resto del código sin cambios






const owners = ref([]);

const evaluadorFormCompleted = ref(false);

const handleSaveEvaluadorTest = async () => {

  try {
        const response = await axios.post(' http://127.0.0.1:8000/api/evaluator_info', evaluadorForm.value);
        console.log(response.data.message);
    } catch (error) {
        console.error('Error al enviar datos del evaluador al backend:', error);
       
    }
console.log(evaluadorForm.value)
  evaluadorFormCompleted.value = true;
};

const handleSaveHTest = async () => {
  errors.value = {}; 

  // if (!evaluadorForm.value.user_id) {
  //   errors.value.user_id = 'El User ID es obligatorio.';
  // }

  // if (!evaluadorForm.value.user_id) {
  //   errors.value.user_id = 'la.';
  // }

  if (!form.value.name) {
    errors.value.name = 'El nombre de la prueba es obligatorio.';
  }

  if (!form.value.url) {
    errors.value.url = 'La URL es obligatoria.';
  }
  if (!form.value.description) {
    errors.value.description = 'La descripción es obligatoria.'; // Corregido el mensaje
  }

  // Verifica si hay errores
  if (Object.values(errors.value).some(error => error !== '')) {
    return; // Detiene el proceso si hay errores de validación
  }

  // Si no hay errores, procede con la solicitud HTTP
  try {
    const response = await axios.post(' http://127.0.0.1:8000/api/owners', {
      name: form.value.name,
      url: form.value.url,
      description: form.value.description
    });

    console.log(response);

    // Después de guardar, obtén nuevamente la lista de propietarios
    await refreshOwnersList();
  } catch (error) {
    console.error('Error al guardar:', error); 
  }
};

const handleDeleteHTest = async (id) => {
  try {
    const response = await axios.delete(` http://127.0.0.1:8000/api/owners/${id}`);
    console.log(response);

    await refreshOwnersList();
  } catch (error) {
    console.error('Error al eliminar:', error);
  }
};

const copylink = (owner) => {
  console.log("presionado copy button", owner.id);
  const url = `/o/${owner.id}/checklist`;
  router.push(url);
};

const goToEvaluate = (ownerId) => {
  console.warn(ownerId);
  router.push(`/o/${ownerId}/evaluacion`);
};

const refreshOwnersList = async () => {
  try {
    const response = await axios.get(' http://127.0.0.1:8000/api/owners');
    owners.value = response.data;
    console.log(owners);
  } catch (error) {
    console.error('Error al obtener la lista de propietarios:', error);
  }
};

const goToEvaluationResults = (ownerId) => {
  console.warn(ownerId);
  router.push(`/o/${ownerId}/resultadoevaluacion`);
};

onMounted(async () => {
  rol.value = authStore.role;
  // Cuando el componente se monta, obtén la lista de propietarios
  await refreshOwnersList();
});


</script>

