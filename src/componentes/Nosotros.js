import React,{Component} from 'react';
import './Nostros.css'

export default class Nosotros extends Component {

    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>

                </div>
                <div className="contenido">
                    <h2>Sobre nostros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl felis, fringilla sed auctor vel, hendrerit eget turpis. In venenatis eu odio tristique maximus. Nullam dictum nisi id turpis tempus vestibulum. Praesent diam dui, pellentesque nec suscipit sit amet, elementum eu sem. Curabitur justo nisi, molestie et lorem in, euismod tempor lectus. Aenean iaculis, diam non consectetur mattis, massa magna fermentum nisi, sed vestibulum justo nunc id massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pulvinar quis nisi non ornare. Duis quis urna dolor. Phasellus sed rutrum nisi. Maecenas metus nulla, feugiat eget tristique in, mattis nec nunc. Duis malesuada tortor luctus mollis egestas. </p>
                </div>
            </div>
        );
    }
}