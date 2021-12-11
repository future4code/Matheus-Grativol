import react from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class App extends react.Component {

    state = {
        listaUsuario: [],
        inputBusca: ""
    }

    componentDidMount() {
        this.pegarLista()
    }

    apagarUsuario = () =>{
        const id = this.listaUsuario.id
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const headers = {
            headers:{
                Authorization: "matheus-grativol-joy"
            }
        }
        axios
            .delete(URL, headers)
            .then((res)=>{
                this.setState({listaUsuario: res.data})
                this.pegarLista()
            })
            .catch((err)=>{
                alert(err.response.data)
            })
    }

    pegarLista = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: "matheus-grativol-joy"
                    }

                }
            )
            .then((res) => {
                this.setState({ listaUsuario: res.data})
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    buscaUsuario = ()=>{
        const nome = this.state.inputBusca
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?${nome}=&email=`
        const headers = {
            headers:{
                Authorization: "matheus-grativol-joy"
            }
        }
        axios
            .get(URL, headers)
            .then((res)=>{
                this.setState({listaUsuario: res.data})
            })
            .catch((err)=>{
                alert(err.response.data)
            })
    }

    mudaBusca = (event) => {
        this.setState({inputBusca: event.target.value})
    }

    render() {

        const lista = this.state.listaUsuario.map((usuario) =>{
            return <p key={usuario.id}>{usuario.name} <button onClick={this.apagarUsuario}>X</button></p>  
            
        })

        return (
            <div>
                <div>
                    {lista}
                </div>
                <div>
                    <span>Procurar usuário</span>
                    <input
                        type="text"
                        value={this.state.inputBusca}
                        onChange={this.mudaBusca}
                        placeholder='Nome para busca'
                    />
                    <button onClick={this.buscaUsuario}>Buscar</button>
                </div>
            </div>
        );
    }

}
