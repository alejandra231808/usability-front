<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';

const form = ref({
  username: '',
  password: '',
  role: '' ,
  experience:''
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
    const response = await axios.post(' http://127.0.0.1:8000/api/login', {
      username: form.value.username,
      password: form.value.password
    });

    const { username, rol, experiencia } = response.data[0]; // Obtener los datos del usuario desde la respuesta

    // Almacenar el nombre de usuario, el rol y la experiencia en el store de autenticación
    useAuth.login(rol, username, experiencia);

    router.push('/pruebasheuristicas'); 
    
  } catch (error) {
    console.error(error);
  }
};



</script>


<template>
  <!-- <div class="login-container">
    <div class="login-form">
      <div class="logo-container">
        <img src="../assets/lading/imagen2.png" alt="Logo de la empresa" class="logo">
      </div> -->
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


