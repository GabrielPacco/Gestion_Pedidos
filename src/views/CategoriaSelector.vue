<template>
    <div class="categoria-selector">
      <h1>Seleccione la Categoría</h1>
      <div class="options">
        <button @click="elegirCategoria('Bovino')">Bovino</button>
        <button @click="elegirCategoria('Porcino')">Porcino</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CategoriaSelector",
    methods: {
      elegirCategoria(categoria) {
        // Guardar la categoría en el localStorage o en un store global
        localStorage.setItem("categoriaSeleccionada", categoria);
        this.$router.push("/pedidos");
      },
    },
  };
  </script>
  
  <style scoped>
  .categoria-selector {
    text-align: center;
    margin-top: 50px;
  }
  .options button {
    margin: 10px;
    padding: 15px 30px;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007bb5;
    color: white;
  }
  .options button:hover {
    background-color: #005f87;
  }
  </style>
  