<template>
    <div>
      <h1>Gestión de Pedidos</h1>
      <button @click="crearPedido">Crear Nuevo Pedido</button>
      <ul>
        <li v-for="pedido in pedidos" :key="pedido.id">
          <p>ID: {{ pedido.id }}</p>
          <p>Cliente: {{ pedido.cliente }}</p>
          <p>Fecha: {{ pedido.fecha }}</p>
          <p>Peso Total: {{ pedido.pesoTotal }} kg</p>
          <router-link :to="`/pedido/${pedido.id}`">Ver Detalle</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "PedidosView",
    data() {
      return {
        pedidos: [
          { id: 1, cliente: "Juan Pérez", fecha: "2024-11-22", pesoTotal: 100 },
          { id: 2, cliente: "Ana López", fecha: "2024-11-23", pesoTotal: 150 },
        ],
      };
    },
    methods: {
      crearPedido() {
        this.$router.push("/crear-pedido");
      },
    },
  };
  </script>
  