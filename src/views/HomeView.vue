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

    <!-- Pedidos Agrupados por Fecha -->
    <div class="pedidos-agrupados">
      <div v-for="(pedidosPorCliente, fecha) in pedidosAgrupados" :key="fecha" class="fecha-seccion">
        <h2>Pedidos del {{ formatearFecha(fecha) }}</h2>
        <div v-for="(pedidos, cliente) in pedidosPorCliente" :key="cliente" class="cliente-seccion">
          <h3>Cliente: {{ cliente }}</h3>
          <ul>
            <li
              v-for="pedido in pedidos"
              :key="pedido.id"
              :class="pedido.estado"
            >
              <p>ID: {{ pedido.id }} - Peso: {{ pedido.peso }} kg</p>
              <button
                v-if="pedido.estado === 'rojo'"
                class="procesar-btn"
                @click="procesarPedido(pedido)"
              >
                Procesar Pedido
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { agruparYOrdenarPedidos, formatearFecha } from "../utils/pedidoUtils";

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
  computed: {
    pedidosAgrupados() {
      return agruparYOrdenarPedidos(this.pedidos);
    },
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
    formatearFecha,
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

/* Pedidos Agrupados */
.pedidos-agrupados {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
}
.fecha-seccion {
  margin-bottom: 20px;
}
.fecha-seccion h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}
.cliente-seccion h3 {
  margin: 5px 0;
  font-size: 1.1rem;
}
.cliente-seccion ul {
  list-style-type: none;
  padding: 0;
}
.cliente-seccion li {
  font-size: 0.9rem;
  background-color: #f9f9f9;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.cliente-seccion li.rojo {
  background-color: #ffcccc;
}
.cliente-seccion li.verde {
  background-color: #ccffcc;
}
.procesar-btn {
  background-color: #008cba;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.procesar-btn:hover {
  background-color: #007bb5;
}
</style>