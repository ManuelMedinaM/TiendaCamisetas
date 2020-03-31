import React,{Component} from 'react';
import './Buscador.css';

class Buscador extends Component {

    leerDatos = (e)=>{
        //termino de busqueda
        const termino = e.target.value;
        // lo enviamos por props
        this.props.busqueda(termino);
    }

    render() {
        return (
            <form className="buscador">
                <input type="text" onChange={this.leerDatos} placeholder="Busqueda"/>
            </form>
        );
    }
}
export default Buscador;