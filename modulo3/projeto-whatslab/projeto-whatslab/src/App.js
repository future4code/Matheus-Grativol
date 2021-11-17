import React from 'react';



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
        <input></input>
        <input></input>
        <button></button>
      </div>
    );
      
  }

}

export default App;
