/**
 * Formatea una fecha para mostrar solo el día de la semana y el día del mes
 * @param {string} fecha - Fecha en formato ISO (YYYY-MM-DD)
 * @returns {string} - Fecha formateada
 */
export function formatearFecha(fecha) {
    const opciones = { weekday: "long", day: "numeric" };
    return new Date(fecha).toLocaleDateString("es-ES", opciones);
  }
  
  /**
   * Agrupa los pedidos por fecha y cliente y los ordena por ID
   * @param {Array} pedidos - Lista de pedidos
   * @returns {Object} - Pedidos agrupados por fecha y cliente, ordenados
   */
  export function agruparYOrdenarPedidos(pedidos) {
    const agrupados = {};
  
    pedidos.forEach((pedido) => {
      if (!agrupados[pedido.fecha]) {
        agrupados[pedido.fecha] = {};
      }
  
      if (!agrupados[pedido.fecha][pedido.nombreCliente]) {
        agrupados[pedido.fecha][pedido.nombreCliente] = [];
      }
  
      agrupados[pedido.fecha][pedido.nombreCliente].push(pedido);
    });
  
    // Ordenar los pedidos por fecha y luego por ID dentro de cada cliente
    return Object.keys(agrupados)
      .sort((a, b) => new Date(a) - new Date(b)) // Ordenar fechas ascendentemente
      .reduce((ordenado, fecha) => {
        ordenado[fecha] = Object.keys(agrupados[fecha])
          .sort() // Ordenar alfabéticamente por cliente
          .reduce((clientesOrdenados, cliente) => {
            clientesOrdenados[cliente] = agrupados[fecha][cliente].sort((a, b) => a.id - b.id); // Ordenar por ID
            return clientesOrdenados;
          }, {});
        return ordenado;
      }, {});
  }
  