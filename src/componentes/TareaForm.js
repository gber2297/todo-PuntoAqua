import React, { useState } from "react";
import "../App.css";

const TareaForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarForm = (event) => {
    setInputText(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submit}>
        <span>Añadir direccion</span>
        <input value={inputText} onChange={manejarForm} />
        <button>Añadir</button>
      </form>
      {!validacion && (
        <div className="validacion">Añada una direccion, por favor</div>
      )}
    </div>
  );
};
export default TareaForm;
