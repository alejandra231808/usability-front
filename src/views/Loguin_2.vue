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

const useAuth = useAuthStore();
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

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      username: form.value.username,
      password: form.value.password
    });

    const { username, rol, experiencia } = response.data; // Datos recibidos
    useAuth.login(rol, username, experiencia); // Guardar en el store
    router.push('/pruebasheuristicas'); // Navegar a la ruta deseada
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data.error) {
      alert(error.response.data.error); // Mostrar error claro al usuario
    } else {
      alert('Ocurrió un error inesperado.');
    }
  }
};
</script>

<template>
  <h1 class="text-center">Iniciar Sesión</h1>
  <form @submit.prevent="handleLogin" class="form">
    <div class="form-group">
      <label for="username" class="form-label">Nombre de usuario</label>
      <input type="text" class="form-control" v-model="form.username" id="username">
      <div class="text-danger">{{ errors.username }}</div>
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Contraseña</label>
      <input type="password" class="form-control" v-model="form.password" id="password">
      <div class="text-danger">{{ errors.password }}</div>
    </div>
    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
  </form>
</template>
