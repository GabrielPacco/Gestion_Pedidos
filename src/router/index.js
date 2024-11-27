import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Pedidos from "../views/Pedidos.vue";
import CrearPedido from "../views/CrearPedido.vue";
import DetallePedido from "../views/DetallePedido.vue";
import Clientes from "../views/Clientes.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/pedidos", name: "Pedidos", component: Pedidos },
  { path: "/crear-pedido", name: "CrearPedido", component: CrearPedido },
  { path: "/pedido/:id", name: "DetallePedido", component: DetallePedido },
  { path: "/clientes", name: "Clientes", component: Clientes },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
