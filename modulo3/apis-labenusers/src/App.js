import './App.css';
import react from 'react';
import axios from 'axios';
import CriarUsuario from './telas/CriarUsuarios'
import Usuarios from './telas/Usuarios'
import styled from 'styled-components';



export default class App extends react.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    tela: "usuario"
  };

  mudarTela = () =>{
    if (this.state.tela === "usuario") {
      this.setState({tela: <Usuarios/>})
    } else {
      this.setState({tela: "usuario"})
    }
  }

  addNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  addEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  criaUsuario = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    const headers = {
      headers: {
        Authorization: "matheus-grativol-joy"
      }
    };

    axios
      .post(URL, body, headers)
      .then(() => {
        alert("Sucesso, usuário criado");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  render() {

    const TelaUsuario = (
      <div>
        {/* {<Usuarios/> ? <Usuarios/> : <CriarUsuario/>} */}
      </div>
    )

    return (
      <div>
        <div>
          <button Click={this.mudarTela}>Trocar de tela</button>
          {this.state.tela === "usuario" ? TelaUsuario : <CriarUsuario/>}
        </div>
        <div>
          <input
            value={this.state.inputNome}
            onChange={this.addNome}
            type="text"
            placeholder="Nome"
          />
          <input
            value={this.state.inputEmail}
            onChange={this.addEmail}
            type="email"
            placeholder="E-mail"
          />
          <button onClick={this.criaUsuario}>Criar Usuário</button>
        </div>
      </div>
      
    );
  }
}


//     return (
//       <div>
//         <button onClick={this.mudarTela}>Trocar de tela</button>
//         
//       </div>
//     );
//   }
  
// }
