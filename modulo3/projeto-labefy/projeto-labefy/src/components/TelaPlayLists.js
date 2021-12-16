import react from "react";
import axios from "axios";
import styled from "styled-components";
// import fotoAddMusica from "../img/home.png";

const CardPlaylist = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    width: 200px;
    justify-content: center;
    align-items: center
`

const CardPlaylists = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;  
`

export default class TelaPlayLists extends react.Component{

    state = {
        playLists: []
    }
    
    componentDidMount() {
        this.pegarPlayLists()
    }
    pegarPlayLists= () =>{
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
                Authorization: "matheus-grativol-joy"
            }
        }
        axios.get(URL,headers)
        .then((res)=>{
            this.setState({playLists: res.data.result.list})
        })
        .catch((err)=>{
            alert(err.response.data)
        })
    }

    deletarPlaylist =(id) =>{
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const headers = {
            headers: {
                Authorization: "matheus-grativol-joy"
            }
        }
        axios.delete(URL,headers)
        .then((res)=>{
            alert("Playlist deletada com sucesso!")
            this.pegarPlayLists()
        })
        .catch((err)=>{
            alert(err.response.data)
        })
    }

    render (){
        console.log(this.state.playLists)
        const list = this.state.playLists.map((playlist)=>{
            return <CardPlaylist key={playlist.id}> 
                <p>{playlist.name}</p> 
                <button onClick={this.props.irParaAddMusica}>+</button>
                <button onClick={() => this.deletarPlaylist(playlist.id)}>X</button>
            </CardPlaylist>
        })
        return (
            <div>
                <div>
                    <h2> Playlists </h2>
                </div>
                <CardPlaylists>
                    {list}
                </CardPlaylists>
            </div>
            
        )
    }

}