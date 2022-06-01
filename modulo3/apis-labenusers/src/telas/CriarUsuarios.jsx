import react from "react";
import styled from "styled-components";
import axios from "axios";

const InputCadrastro = styled.input`
  margin-top: 10px
`

export default class App extends react.Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };

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
        Authorization: "matheus-grativol-joy",
      },
    };

    axios
      .post(URL, body, headers)
      .then((res) => {
        alert("Usuário criado com sucesso!");
        this.setState({inputNome:"", inputEmail:""})
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  render() {
    return (
      <div>
        <div>
          {/* <button onClick={this.props.irParaUsuario}>Ir para lista de usuário</button> */}
        </div>
        <div>
          <InputCadrastro
            value={this.state.inputNome}
            onChange={this.addNome}
            placeholder="Nome"
          />
          <InputCadrastro
            value={this.state.inputEmail}
            onChange={this.addEmail}
            placeholder="E-mail"
          />
          <button onClick={this.criaUsuario}>Criar Usuário</button>
        </div>
      </div>
      
    );
  }
}
