<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const form = ref({
    username: '',
    email: '',
    password: ''
  });
  const errors = ref({
    username: '',
    email: '',
    password: ''
  });
  
  const router = useRouter();
  
  const handleRegister = async () => {
    errors.value = {};
  
    if (!form.value.username) {
      errors.value.username = 'El nombre de usuario es obligatorio.';
    }
  
    if (!form.value.email) {
      errors.value.email = 'El correo electrónico es obligatorio.';
    }
  
    if (!form.value.password) {
      errors.value.password = 'La contraseña es obligatoria.';
    }
  
    if (Object.values(errors.value).some(error => error !== '')) {
      return;
    }
  
    const response = await axios.post('http://127.0.0.1:5000/register', {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    });
  
    console.log(response);
  
    router.push('/login'); // Redirige a la página de inicio de sesión después del registro
  };
</script>

<template>
  <div>
    <h1 class="text-center">Registro de Usuario</h1>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label for="username" class="form-label">Nombre de usuario</label>
            <input type="text" class="form-control" v-model="form.username" id="username">
            <div class="text-danger">{{ errors.username }}</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" v-model="form.email" id="email">
            <div class="text-danger">{{ errors.email }}</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" v-model="form.password" id="password">
            <div class="text-danger">{{ errors.password }}</div>
          </div>
          <button type="submit" class="btn btn-primary">Registrar Usuario</button>
        </form>
      </div>
    </div>
  </div>
</template>
