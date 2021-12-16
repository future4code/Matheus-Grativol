import axios from "axios";
import react from "react";

export default class TelaAddMusica extends react.Component{

    state = {
        name: "",
        artist: "",
        url: "",
        musics: []
    }

    componentDidMount () {
        this.pegarMusicas()
    }

    handleName = (e) =>{
        this.setState({name: e.target.value})
    }
    handleArtist = (e) =>{
        this.setState({artist: e.target.value})
    }
    handleUrl = (e) =>{
        this.setState({url: e.target.value})
    }

    pegarMusicas = (id) =>{
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const headers = {
            headers: {
                Authorization: "matheus-grativol-joy"
            }
        }
        axios.get(URL, headers)
        .then(()=>{

        })
        .catch(()=>{

        })
    }
    
    addMusica = (id) =>{
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        const headers = {
            headers: {
                Authorization: "matheus-grativol-joy"
            }
        }
        axios.post(URL, body, headers)
        .then((res)=>{
            alert("Música adicionada com sucesso!")
            this.setState({name:"", artist:"", url:""})
        })
        .catch((err)=>{
            alert(err.response.data)
        })
    }

    deletarMusica = (id) =>{

    }

    render(){
        const musicas = this.state.musics.map ((music)=>{
            return <div key={music.id}>
                {music.name}{music.artist}{music.url}
                <button onClick={() => this.deletarMusica(music.id)}>x</button>
            </div>
        })
        return(
            <div>
                <div>
                    <h2>Tela add música</h2>
                    {musicas}
                </div>
                <div>                    
                    <input
                    value={this.state.name}
                    onChange={this.handleName}
                    placeholder="Nome da música"
                    />
                    <input
                    value={this.state.artist}
                    onChange={this.handleArtist}
                    placeholder="Nome"
                    />
                    <input
                    value={this.state.url}
                    onChange={this.handleUrl}
                    placeholder="URL de música"
                    />
                    <button>Adicionar música</button>
                    <button onClick={this.props.irParaPlaylists}>Playlists</button>
                </div>
            </div>
            
        )
    }
}