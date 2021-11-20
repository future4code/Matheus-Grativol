import React from 'react';
import styled from 'styled-components';

const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin-left: 20%;
  margin-right: 20%;
  border: 1px solid black;
  background-color: #fff4e0;
`

const ListaMensagem = styled.div`
  /* margin: 5px; */
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`
const BarraInput = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 100px;
  margin: 5px;
  column-gap: 5px;
`

const BlocoDeMensagens = styled.p`

  background-color: greenyellow;
  box-shadow: 0 0 0.5em black;
  border-radius: 5px;
  padding: 10px;
`
const BoldName = styled.span`
  font-weight: bold;
`

const Botao = styled.button`
  background-color: #00a106bf;
  padding: 5px;
  border-radius: 8px;
  border-style: ridge;
`

// const BotaoXMensagem = styled.button`
//   background-color: greenyellow;
//   margin-left: 50vh;
//   border-style: none;
// `
class App extends React.Component{
  state = {
    mensagem: [
      {
        Usuario: "Matheus",
        Mensagem: "Desenvolvedor FullStack!"
      },
    ],
    valorInputNome: "",
    valorInputMensagem: ""
    
  };

  adicionarMensagem = () => {
    const novaMensagem = {
      Usuario: this.state.valorInputNome,

      Mensagem: this.state.valorInputMensagem,
    }

    const newMensagem = [...this.state.mensagem, novaMensagem]
    this.setState({mensagem: newMensagem})

  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  }
  // mudarUsuario = (event) => {
  //   this.setState({Usuario: event.target.value});
  // };

  // mudarMensagem = (event) => {
  //   this.setState({Mensagem: event.target.value});
  // };

  render(){

    const listaDeMensagens = this.state.mensagem.map((msg) => {
      return(
        <BlocoDeMensagens>
          <BoldName>{msg.Usuario}</BoldName> : 
          {msg.Mensagem} 
        </BlocoDeMensagens>
      )
    })

    return (
      <ContainerPai>
 
        <ListaMensagem>
          {listaDeMensagens}
        </ListaMensagem>

        <BarraInput>

          <input 
            value={this.state.valorInputNome}
            onChange= {this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputMensagem}
            onChange = {this.onChangeInputMensagem}
            placeholder= {"Mensagem"}
          />
          <Botao onClick={this.adicionarMensagem}>Adicionar</Botao>
            
        </BarraInput>
        
      </ContainerPai>
    );
      
  }

}

export default App;
