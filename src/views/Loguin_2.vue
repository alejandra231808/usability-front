<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';

const form = ref({
  username: '',
  password: ''
});
const errors = ref({
  username: '',
  password: ''
});
const useAuth = useAuthStore()
const router = useRouter();

const handleLogin = async () => {
  errors.value = {};

  if (!form.value.username) {
    errors.value.username = 'El nombre de usuario es obligatorio.';
  }

  if (!form.value.password) {
    errors.value.password = 'La contraseña es obligatoria.';
  }

  if (Object.values(errors.value).some(error => error !== '')) {
    return;
  }

  await axios.post('http://127.0.0.1:5000/login', {
    username: form.value.username,
    password: form.value.password
  }).then(response => {
    console.log(response);
  }

  ).catch();


  // Lógica adicional después de iniciar sesión, como redirección a otra página
  // ...
  useAuth.login();
  router.push('/pruebasheuristicas'); // Ejemplo: Redirige al usuario a la página de dashboard después de iniciar sesión
};
</script>

<template>
  <div>
    <h1 class="text-center">Iniciar Sesión</h1>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Nombre de usuario</label>
            <input type="text" class="form-control" v-model="form.username" id="username">
            <div class="text-danger">{{ errors.username }}</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" v-model="form.password" id="password">
            <div class="text-danger">{{ errors.password }}</div>
          </div>
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>
  