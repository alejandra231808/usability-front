<template>
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Heuristicas App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/pruebasheuristicas">Inicie Sesion</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/pruebadiseno">Pruebas Diseño</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/register">Registrarse</RouterLink>
                    </li>
                    <li class="nav-item mx-auto" v-if="condition">
                        <a class="nav-link" v-on:click="handleLogout">Cerrar Sesion</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useAuthStore } from '../stores/useAuthStore';
import { useRouter } from 'vue-router';

const condition = true;
const router = useRouter();
const useAuth = useAuthStore();

const handleLogout = () => {
    console.log("cerrando sesion")
    useAuth.logout();
    router.push("/");
}
</script>

<style scoped>

.navbar {
    background-color: #e0d8e9; /* Color de fondo */
    border-bottom: 1px solid #207260; /* Borde inferior */
}

.nav-link {
    color: #111111; /* Color del texto */
}

.nav-link:hover {
    color: #277959; /* Color del texto al pasar el mouse */
}
</style>
