import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  };

  // o "_" usado antes do metodo faz com q o mesmo seja considerado private
  _handleMudaTitulo(e){
    e.stopPropagation();
    this.titulo = e.target.value;
  };

  _handleMudaTextarea(e){
    e.stopPropagation();
    this.texto = e.target.value;
  };

  _criarNota(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudaTextarea.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
