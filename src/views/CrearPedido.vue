<template>
    <div>
      <h1>Crear Pedido</h1>
      <form @submit.prevent="guardarPedido">
        <label>
          Cliente:
          <input v-model="pedido.cliente" type="text" required />
        </label>
        <label>
          Fecha:
          <input v-model="pedido.fecha" type="date" required />
        </label>
        <h2>Piezas</h2>
        <div v-for="(pieza, index) in pedido.piezas" :key="index">
          <label>
            ID Pieza:
            <input v-model="pieza.id" type="number" required />
          </label>
          <label>
            Peso:
            <input v-model="pieza.peso" type="number" step="0.1" required />
          </label>
          <label>
            Tipo:
            <select v-model="pieza.tipo" required>
              <option value="Cerdo">Cerdo</option>
              <option value="Res">Res</option>
            </select>
          </label>
          <button type="button" @click="eliminarPieza(index)">Eliminar Pieza</button>
        </div>
        <button type="button" @click="agregarPieza">Agregar Pieza</button>
        <button type="submit">Guardar Pedido</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "CrearPedidoView",
    data() {
      return {
        pedido: {
          cliente: "",
          fecha: "",
          piezas: [],
        },
      };
    },
    methods: {
      agregarPieza() {
        this.pedido.piezas.push({ id: "", peso: "", tipo: "Cerdo" });
      },
      eliminarPieza(index) {
        this.pedido.piezas.splice(index, 1);
      },
      guardarPedido() {
        console.log("Pedido guardado:", this.pedido);
        this.$router.push("/pedidos");
      },
    },
  };
  </script>
  