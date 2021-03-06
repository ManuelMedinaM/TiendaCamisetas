import React from 'react';
import './SingleProducto.css'
const SingleProducto = (props) => {
if(props===undefined)return null;//esto es para validar, por si alguien pone un numero mas elevado que no existe en el url no se cargue nada porque no se le esta pasando ningun dato
    const{imagen, nombre, precio, descripcion }= props.producto;
 
    return (
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>
            </div>

            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">${precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    );
};

export default SingleProducto;