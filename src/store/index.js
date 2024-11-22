import { createStore } from 'vuex';

const store = createStore({
  state: {
    pedidos: [],
    clientes: [],
  },
  mutations: {
    addPedido(state, pedido) {
      state.pedidos.push(pedido);
    },
    addCliente(state, cliente) {
      state.clientes.push(cliente);
    },
  },
  actions: {
    crearPedido({ commit }, pedido) {
      commit('addPedido', pedido);
    },
    crearCliente({ commit }, cliente) {
      commit('addCliente', cliente);
    },
  },
  getters: {
    getPedidos: (state) => state.pedidos,
    getClientes: (state) => state.clientes,
  },
});

export default store;
