<template>
    <div>
      <h1>Detalle del Pedido</h1>
      <p><strong>ID:</strong> {{ pedido.id }}</p>
      <p><strong>Cliente:</strong> {{ pedido.cliente }}</p>
      <p><strong>Fecha:</strong> {{ pedido.fecha }}</p>
      <p><strong>Peso Total:</strong> {{ pedido.pesoTotal }} kg</p>
      <h2>Piezas</h2>
      <ul>
        <li v-for="pieza in pedido.piezas" :key="pieza.id">
          <p>ID Pieza: {{ pieza.id }}</p>
          <p>Peso: {{ pieza.peso }} kg</p>
          <p>Tipo: {{ pieza.tipo }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "DetallePedidoView",
    data() {
      return {
        pedido: {
          id: 1,
          cliente: "Juan Pérez",
          fecha: "2024-11-22",
          pesoTotal: 100,
          piezas: [
            { id: 1, peso: 20, tipo: "Cerdo" },
            { id: 2, peso: 30, tipo: "Res" },
          ],
        },
      };
    },
  };
  </script>
  