<template>
    <div class="pedido-card">
      <h3>Pedido #{{ pedido.id }}</h3>
      <p>Cliente: {{ pedido.cliente }}</p>
      <p>Fecha: {{ pedido.fecha }}</p>
      <p>Peso total: {{ pedido.pesoTotal }} kg</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pedido: Object,
    },
  };
  </script>
  