<template>
    <div class="home">
      <header>
        <h1>Gestión de Pedidos</h1>
        <button class="add-btn" @click="mostrarFormulario = !mostrarFormulario">
          {{ mostrarFormulario ? "Cerrar Formulario" : "Agregar Pedido" }}
        </button>
      </header>
  
      <!-- Formulario de Pedido -->
      <div v-if="mostrarFormulario" class="form-container">
        <h2>Nuevo Pedido</h2>
        <form @submit.prevent="agregarPedido">
          <label for="camal">Camal:</label>
          <input id="camal" v-model="nuevoPedido.camal" type="text" placeholder="Ingrese el camal" required />
  
          <label for="nombreCliente">Nombre Cliente:</label>
          <input id="nombreCliente" v-model="nuevoPedido.nombreCliente" type="text" placeholder="Nombre del Cliente" required />
  
          <label for="id">ID:</label>
          <input id="id" v-model="nuevoPedido.id" type="number" placeholder="ID del Pedido" required />
  
          <label for="fecha">Fecha:</label>
          <input id="fecha" v-model="nuevoPedido.fecha" type="date" required />
  
          <label for="peso">Peso:</label>
          <input id="peso" v-model="nuevoPedido.peso" type="number" placeholder="Peso (kg)" required />
  
          <button class="submit-btn" type="submit">Añadir Pedido</button>
        </form>
      </div>
  
      <!-- Lista de Pedidos -->
      <div class="pedidos-container">
        <h2>Pedidos</h2>
        <ul>
          <li
            v-for="pedido in pedidos"
            :key="pedido.id"
            :class="pedido.estado"
          >
            <p><strong>Camal:</strong> {{ pedido.camal }}</p>
            <p><strong>Cliente:</strong> {{ pedido.nombreCliente }}</p>
            <p><strong>ID:</strong> {{ pedido.id }}</p>
            <p><strong>Fecha:</strong> {{ pedido.fecha }}</p>
            <p><strong>Peso:</strong> {{ pedido.peso }} kg</p>
            <button class="procesar-btn" @click="procesarPedido(pedido)">Procesar Pedido</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeView",
    data() {
      return {
        mostrarFormulario: false,
        nuevoPedido: {
          camal: "",
          nombreCliente: "",
          id: "",
          fecha: "",
          peso: "",
          estado: "rojo", // Por defecto el estado es "rojo"
        },
        pedidos: [], // Lista de pedidos
      };
    },
    methods: {
      agregarPedido() {
        this.pedidos.push({ ...this.nuevoPedido });
        this.nuevoPedido = {
          camal: "",
          nombreCliente: "",
          id: "",
          fecha: "",
          peso: "",
          estado: "rojo", // Estado inicial es rojo
        };
        this.mostrarFormulario = false;
      },
      procesarPedido(pedido) {
        pedido.estado = "verde"; // Cambiar estado a verde
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos generales */
  .home {
    font-family: Arial, sans-serif;
    padding: 10px;
    max-width: 480px;
    margin: auto;
  }
  
  /* Header */
  header {
    text-align: center;
    margin-bottom: 20px;
  }
  header h1 {
    font-size: 1.5rem;
    color: #2c3e50;
  }
  header .add-btn {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  header .add-btn:hover {
    background-color: #45a049;
  }
  
  /* Formulario */
  .form-container {
    background-color: #f9f9f9;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .form-container h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  .form-container label {
    display: block;
    margin: 10px 0 5px;
  }
  .form-container input {
    width: calc(100% - 20px);
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-container .submit-btn {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
  }
  .form-container .submit-btn:hover {
    background-color: #45a049;
  }
  
  /* Lista de Pedidos */
  .pedidos-container {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
  }
  .pedidos-container h2 {
    margin-bottom: 10px;
    text-align: center;
  }
  .pedidos-container ul {
    list-style-type: none;
    padding: 0;
  }
  .pedidos-container li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    position: relative;
  }
  .pedidos-container li.rojo {
    background-color: #ffcccc;
  }
  .pedidos-container li.verde {
    background-color: #ccffcc;
  }
  .pedidos-container .procesar-btn {
    background-color: #008cba;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  .pedidos-container .procesar-btn:hover {
    background-color: #007bb5;
  }
  </style>
  