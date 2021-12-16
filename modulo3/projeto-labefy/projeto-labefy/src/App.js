import react from "react";
import styled from "styled-components";
import axios from "axios";
import TelaAddMusica from "./components/TelaAddMusica";
import TelaPlayLists from "./components/TelaPlayLists";
// import fotoHome from "./img/home.png"


const ContainerPai = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 300px 1fr 200px;
`
export default class App extends react.Component{

  state = {
    telas: "lists",
    inputPlayList: ""
  }

  handlePlaylist = (e) => {
    this.setState({inputPlayList: e.target.value})
  }

  escolheTela = () =>{
    switch (this.state.telas){
      case "lists":
        return <TelaPlayLists irParaAddMusica = {this.irParaAddMusica}/>
      case "addMusica":
        return <TelaAddMusica irParaPlaylists={this.irParaPlaylists}/>
      default:
        return <div>Erro</div>
    }
  }

  irParaPlaylists = () =>{
    this.setState({telas: "lists"})
  }

  irParaAddMusica = () => {
    this.setState({telas: "addMusica"})
  }

  addPlayList = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.inputPlayList
    }
    const headers = {
      headers: {
        Authorization: "matheus-grativol-joy"
      }
      
    }
    axios.post(URL, body, headers)
    .then((res) =>{
      alert("Playlist criada com sucesso!")
      this.setState({inputPlayList: ""})

    })
    .catch((err)=> {
      alert(err.response.data.message)
    })
  }

  render (){
    return (
      <ContainerPai>
        <div>
          <div>
            {/* {fotoHome} */}
            <h2>Inicio</h2>
            <input/>
            <button>Busca playlist</button>
          </div>
          <div>
            <input
              value={this.state.inputPlayList}
              onChange={this.handlePlaylist}
              placeholder= "Playlist"
            />
            <button onClick={this.addPlayList}>Add Playlists</button>
          </div>   
        </div>

        <div>
          {this.escolheTela()}
        </div>

        <div>
          <h2>Usuário</h2>
        </div>
        
      </ContainerPai>
    );
  }
  
}
