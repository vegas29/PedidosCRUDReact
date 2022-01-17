import {useState} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPedidos from "./components/ListadoPedidos";

function App() {

  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState({});

  const eliminarPedido = id =>{
    const pedidosActualizados = pedidos.filter(pedido => pedido.id !== id);
    setPedidos(pedidosActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 flex flex-col md:flex-row">
        <Formulario 
          pedidos={pedidos}
          setPedidos={setPedidos}
          pedido={pedido}
          setPedido={setPedido}
        />
        <ListadoPedidos 
          pedidos={pedidos}
          setPedido={setPedido}
          eliminarPedido={eliminarPedido}
        />
      </div>
    </div>
  )
}

export default App