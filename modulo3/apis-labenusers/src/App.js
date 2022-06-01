import react from 'react';
import CriarUsuario from './telas/CriarUsuarios'
import Usuarios from './telas/Usuarios'
// import styled from 'styled-components';



export default class App extends react.Component {
  state = {
    tela: "usuario",
  };


  // escolheTela = () =>{
  //   switch (this.state.tela){
  //     case "criarUsuario":
  //       return <CriarUsuario irParaUsuario = {this.irParaUsuario}/>
  //     case "usuario":
  //       return <Usuarios irParaCriarUsuario = {this.irParaCriarUsuario}/>
  //     default:
  //       return <div>Erro! Página nao encontrada :( </div>
  //   }
  // }

  // irParaCriarUsuario = () =>{
  //   this.setState({tela: "criarUsuario"})
  // }

  // irParaUsuario = () =>{
  //   this.setState({tela: "usuario"})
  // }

  mudarTela = () =>{
    if (this.state.tela === "usuario") {
      this.setState({tela: "criarUsuario"})
    } else {
      this.setState({tela: "usuario"})
    }
  }
  render() {

    return (
      <div>
        <div>

          {/* {this.escolheTela()} */}
          <button onClick={this.mudarTela}>Trocar de tela</button>
          {this.state.tela === "usuario" ? <Usuarios/> : <CriarUsuario/>}
        </div>
      </div>
      
    );
  }
}

