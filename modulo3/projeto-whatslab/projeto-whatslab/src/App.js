import React from 'react';
import styled from 'styled-components';


class App extends React.Component{
  state = {
    Usuario: "",
    Mensagem: ""
  };

  mudarUsuario = (event) => {
    this.setState({Usuario: event.target.value});
  };

  mudarMensagem = (event) => {
    this.setState({Mensagem: event.target.value});
  };

  render(){
    return (
      <div>
        <div>

        </div>

        <div>
          <input></input>
          <input></input>
          <button></button>
        </div>
        
      </div>
    );
      
  }

}

export default App;
