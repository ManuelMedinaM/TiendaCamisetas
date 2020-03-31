import React,{Component} from 'react';
import{ BrowserRouter,Route,Switch} from 'react-router-dom'
import Productos from './Productos';
import Nosotros from './Nosotros';
import Error from './Error';
import Header from './Header'
import infoProductos from '../datos/datos.json';
import SingleProducto from './SingleProducto';
import Navegacion from './Navegacion';
import Contacto from './Contacto';

class Router extends Component {
    state ={
        productos : infoProductos,
        terminoBusqueda:''
    }

    busquedaProducto = (busqueda)=>{
        if(busqueda.length>3){
            this.setState({
                terminoBusqueda : busqueda
            })
        }else{
            this.setState({
                terminoBusqueda : ''
            })
        }
    }

    render() {

        let productos = [... this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado;
        if(busqueda!==''){
            //el filter lo que hara es filtrar el arrego y borrara todo lo que no sea parecido a la busqueda, dentro de prosucto tenemod que especificarle que es lo que que va a comparar, en este caso el nombre y le ponemos tolowercase() para que la comparacion de ambos lado, tanto la busqueda como el nombre sea en minuscula y no haya incidencias, el index of es para decirle la palabra que va afiltrar y tambien le ponemos en minuscula y que sea distinto a menos 1 porque si no encuentra nada nos arroja -1 y no queremos que arroje eso
            resultado = productos.filter(producto=>(
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1

            ))
        }else{
            resultado = productos;
        }

        return (
            
            <BrowserRouter>
                <div className="contenedor">
                <Header/>
                <Navegacion/>
                    <Switch>
                        <Route exact path="/" render ={()=>(
                            <Productos
                                productos ={resultado}
                                busquedaProducto={this.busquedaProducto}
                            />
                        )} />
                        <Route path="/nosotros" component={Nosotros} />
                        <Route exact path="/productos" render ={()=>(
                            <Productos
                                productos ={resultado}
                                busquedaProducto={this.busquedaProducto}

                            />
                        )} />
                        <Route exact path="/producto/:productoId" render={(props)=>{
                            let idProducto = props.location.pathname.replace('/producto/','');
                            return(
                                <SingleProducto
                                    producto={this.state.productos[idProducto]}
                                />
                            )
                            }} />
                            <Route exact path="/contacto" component={Contacto}/>
                        <Route  component={Error} />
                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}
export default Router;