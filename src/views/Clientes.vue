<template>
    <div>
      <h1>Gestión de Clientes</h1>
      <ul>
        <li v-for="cliente in clientes" :key="cliente.id">
          <p>Nombre: {{ cliente.nombre }}</p>
          <p>Pedidos Realizados: {{ cliente.pedidos.length }}</p>
          <router-link :to="`/cliente/${cliente.id}`">Ver Detalle</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ClientesView",
    data() {
      return {
        clientes: [
          { id: 1, nombre: "Juan Pérez", pedidos: [1, 2] },
          { id: 2, nombre: "Ana López", pedidos: [3] },
        ],
      };
    },
  };
  </script>
  