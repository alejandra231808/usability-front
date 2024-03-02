<template>
    <div class="gauge-container">
      <div class="gauge-bg"></div>
      <div class="gauge-middle"></div>
      <div class="gauge-overlay" :style="{ transform: rotateStyle }"></div>
      <div class="gauge-data">
        <span>{{ percentage }}%</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['percentage'],
    computed: {
      rotate() {
        return this.percentage * 180 / 100;
      },
      rotateStyle() {
        return `rotate(${this.rotate}deg)`;
      }
    }
  };
  </script>
  
  <style>
  /* Agrega tus estilos CSS aquí según sea necesario */
  .gauge-container {
    position: relative;
    width: 200px; /* Ajusta el ancho según tus necesidades */
    height: 200px; /* Ajusta la altura según tus necesidades */
  }
  
  /* Agrega más estilos según sea necesario para los elementos de la gráfica */
  </style>
  