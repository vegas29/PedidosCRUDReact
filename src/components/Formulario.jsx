
import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pedidos, setPedidos, pedido, setPedido}) => {
    //Definir el state inicial
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [error, setError]= useState(false);

    useEffect(()=>{
        if(Object.keys(pedido).length > 0){
            setNombre(pedido.nombre);
            setCategoria(pedido.categoria);
            setEmail(pedido.email);
            setFecha(pedido.fecha);
            setDescripcion(pedido.descripcion);
        }
    }, [pedido])

    //Generar ID
    const generarId = ()=>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //Validacion del formulario
        if([nombre, categoria, email, fecha, descripcion].includes('')){
            setError(true);
            return;
        }

        setError(false);

        //Objeto de pedido

        const objetoPedido = {
            nombre,
            categoria,
            email,
            fecha,
            descripcion
        }

        if(pedido.id){
            //Editando el registro'
            objetoPedido.id = pedido.id;
            console.log(objetoPedido)
            console.log(pedido)

            const pedidosActualizados = pedidos.map( pedidoState =>
                 pedidoState.id === pedido.id ? objetoPedido : pedidoState
            );

            setPedidos(pedidosActualizados);
            setPedido({});
        }else{
           //Nuevo registro
            objetoPedido.id = generarId();
            setPedidos([...pedidos, objetoPedido]);
        }

        
        //Reiniciar el form
        setNombre('');
        setCategoria('');
        setEmail('');
        setFecha('');
        setDescripcion('');
        
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center">Seguimiento de los pedidos</h1>

            <p className="text-lg mt-5 mb-10 text-center">
                Añade pedidos y {''}
                <span className="text-yellow-300 font-bold">administralos</span>
            </p>

            <form onSubmit={handleSubmit} action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
                {error &&  <Error>
                    <p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="namep">Nombre del producto</label>
                    <input
                        id="namep" 
                        type="text" 
                        placeholder="Nombre del producto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"    
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="categop">Categoria del producto</label>
                    <input
                        id="categop" 
                        type="text" 
                        placeholder="Categoria del producto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"    
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="email">Correo del propietario</label>
                    <input
                        id="email" 
                        type="email" 
                        placeholder="Correo electrónico"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"    
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="fechas">Fecha de solicitud</label>
                    <input
                        id="fechas" 
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"    
                        value={fecha}
                        onChange={(e)=> setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-bold uppercase" htmlFor="descripcion">Descripción del producto</label>
                    <textarea 
                        id="descripcion"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe el producto" 
                        value={descripcion}
                        onChange={(e)=> setDescripcion(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-yellow-400 w-full text-white p-3 uppercase font-bold hover:bg-yellow-500 cursor-pointer transition-all"
                    value={pedido.id ? 'Editar pedido' : 'Agregar pedido'} 
                />
            </form>
        </div>
    );
}
 
export default Formulario;