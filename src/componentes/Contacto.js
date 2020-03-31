import React from 'react';
import './Contacto.css'

const Contacto = () => {
    return (
        <div>
            <form>
                <legend>Formulario de contacto</legend>
                <div className="input-field">
                    <label>Nombre: </label>
                    <input type="text" placeholder="tu nombre"/>
                </div>
                <div className="input-field">
                    <label>Email: </label>
                    <input type="email" placeholder="tu email"/>
                </div>
                <div className="input-field">
                    <label>mensaje: </label>
                    <textarea></textarea>
                </div>
                <div className="input-field enviar">
                    <input type="submit" value="enviar"/>
                </div>
            </form>
        </div>
    );
};

export default Contacto;