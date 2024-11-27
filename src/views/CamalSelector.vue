<template>
    <div class="camal-selector">
      <h1>Seleccione el Camal</h1>
      <div class="options">
        <button @click="elegirCamal('Metro')">Metro</button>
        <button @click="elegirCamal('Santiago')">Santiago</button>
        <button @click="elegirCamal('Goyo')">Goyo</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CamalSelector",
    methods: {
      elegirCamal(camal) {
        // Guardar el camal en el localStorage o en un store global si estás usando Vuex/Pinia
        localStorage.setItem("camalSeleccionado", camal);
        this.$router.push("/categoria");
      },
    },
  };
  </script>
  
  <style scoped>
  .camal-selector {
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
    background-color: #4caf50;
    color: white;
  }
  .options button:hover {
    background-color: #45a049;
  }
  </style>
  