import React, { Component } from "react";
import "./style.css";

function A({ nombre }) {
  return <p>Hola {nombre}</p>;
}

function B(props) {
  return <p>Hola Mundo {props.nombre}</p>;
}

class MiComponentedeClase extends Component {
  render() {
    return <p>Hola Mundo desde la clase</p>;
  }
}

export default function App() {
  let nombre = "Pipi";
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <A nombre={nombre}>
        <p>hijo</p>
      </A>
      <B nombre={nombre} />
    </div>
  );
}
