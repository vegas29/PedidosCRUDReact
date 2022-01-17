const Pedido = ({pedido, setPedido, eliminarPedido}) => {
    const {nombre, categoria, email, fecha, descripcion, id} = pedido;

    const handleEliminar = () =>{
        const respuesta = confirm('¿Está seguro de eliminar este pedido?');

        if(respuesta){
            eliminarPedido(id);
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Categoria: {''}
                    <span className="font-normal normal-case">{categoria}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Correo: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Descripcion: {''}
                    <span className="font-normal normal-case">{descripcion}</span>
                </p>

                <div className="flex mt-10 gap-5">
                    <button
                        type="button"
                        className="py-2 px-10 bg-yellow-300 hover:bg-yellow-400 text-white font-bold uppercase rounded-lg"
                        onClick={()=> setPedido(pedido)}
                    >Editar</button>

                    <button
                        type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>

           
    );
}
 
export default Pedido;