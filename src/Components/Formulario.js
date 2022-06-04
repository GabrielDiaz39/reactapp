import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellidos: "",
      telefono: "",
      email: "",
      comentarios: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("Se enviaron los datos de : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="borde-blue">
        <h2 className="contenido__text neon">Formulario</h2>
        <form class="formulario sombra borde-green">
          <fieldset>
            <legend>Favor de rellenar todo los campos</legend>
            <div class="contenido-formula">
              <div class="formula">
                <label>Nombre</label>
                <input class="input-text" type="text" placeholder="..." />
              </div>
              <div class="formula">
                <label>Teléfono</label>
                <input class="input-text" type="tel" />
              </div>
            </div>
            <div class="formula">
                <label>Email</label>
                <input
                  class="input-text"
                  type="text"
                />
              </div>
            <div class="formula">
              <label class="centraTx">Comentarios</label>
              <textarea class="input-text"></textarea>
            </div>
            <div class="flex-boton">
              <input class="boton input-boton" type="button" value="Enviar" />
            </div>
          </fieldset>
        </form>
        
      </div>
    );
  }
}

export default Formulario;