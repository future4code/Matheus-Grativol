import react from "react";
import axios from "axios";
import styled from "styled-components";
import add from "../img/add.png";
import Rmv from "../img/rmv.png";
import TelaAddMusica from "./TelaAddMusica";


const CardPlaylist = styled.div`
    /* border: 1px solid black; */
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    width: 200px;
    justify-content: center;
    align-items: center;
    background: whitesmoke;
    box-shadow: 3px 3px 3px silver;
`
const H2 = styled.h2`
  color: white;
`

const Button = styled.button`
    text-decoration: none;
    border: none;
    background: whitesmoke;

`

const Iconi = styled.img`
    width: 30px;
`
const IconiRmv = styled.img`
    width: 20px;
`
const ContainerButtons = styled.div`
    display: flex;
`

const CardPlaylists = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;  
    padding-left: 20px;
    /* background: linear-gradient(45deg, black, transparent); */
`

const ContainerCards = styled.div`
    background: #000000db;
    text-align: center;
    padding: 10px;
    color: cornflowerblue; 
    height: 100vh;
`

export default class TelaPlayLists extends react.Component{

    state = {
        playLists: [],
        idPlaylist: ""
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
            // this.setState({idPlaylist: res.data.result.list.id})
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
                <ContainerButtons>
                    <Button onClick={this.props.irParaAddMusica}> <Iconi src={add}/> </Button>
                    <Button onClick={() => this.deletarPlaylist(playlist.id)}> <IconiRmv src={Rmv}/> </Button>  
                </ContainerButtons>

            </CardPlaylist>
        })
        return (
            <ContainerCards>
                <div>
                    <H2> Playlists </H2>
                </div>
                <CardPlaylists>
                    {list}
                </CardPlaylists>
            </ContainerCards>       
        )
    }

}