<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();

onMounted(() => {
    console.log(route.params.ownerId);
});

</script>

<template>
    <main>
        <h1>Creando el cuestionario</h1>
    </main>
</template>
