import { createRouter, createWebHashHistory } from "vue-router";
import CamalSelector from "../views/CamalSelector.vue";
import CategoriaSelector from "../views/CategoriaSelector.vue";
import HomeView from "../views/HomeView.vue";
import Pedidos from "../views/Pedidos.vue";
import CrearPedido from "../views/CrearPedido.vue";
import DetallePedido from "../views/DetallePedido.vue";
import Clientes from "../views/Clientes.vue";

const routes = [
  // Ruta inicial para seleccionar el Camal
  { path: "/", name: "CamalSelector", component: CamalSelector },

  // Ruta para seleccionar la categoría (Bovino o Porcino)
  { path: "/categoria", name: "CategoriaSelector", component: CategoriaSelector },

  // Ruta principal para gestionar los pedidos
  { path: "/pedidos", name: "Home", component: HomeView },

  // Otras rutas existentes
  { path: "/pedidos-lista", name: "Pedidos", component: Pedidos },
  { path: "/crear-pedido", name: "CrearPedido", component: CrearPedido },
  { path: "/pedido/:id", name: "DetallePedido", component: DetallePedido },
  { path: "/clientes", name: "Clientes", component: Clientes },
];

const router = createRouter({
  history: createWebHashHistory(), // Usamos el modo hash para mayor compatibilidad
  routes,
});

export default router;
