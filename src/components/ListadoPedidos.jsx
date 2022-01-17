import Pedido from "./Pedido";

const ListadoPedidos = ({pedidos, setPedido, eliminarPedido}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
            
            {pedidos && pedidos.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pedidos</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus  {''}
                        <span className="text-yellow-300 font-bold">pedidos</span>
                    </p>
                    {pedidos.map(pedido=>{
                        return(
                            <Pedido
                                key={pedido.id}
                                pedido={pedido}
                                setPedido={setPedido}
                                eliminarPedido={eliminarPedido}
                            />
                        )
                    })}
                </>
                
            ): (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pedidos</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pedidos y apareceran {''}
                        <span className="text-yellow-300 font-bold">en este lugar</span>
                    </p>
                </>
            )}

            
            
        </div>

    );
}
 
export default ListadoPedidos;