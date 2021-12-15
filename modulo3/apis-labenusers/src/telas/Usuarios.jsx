import react from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivNomes = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between
`
export default class App extends react.Component {

    state = {
        listaUsuario: [],
        inputBusca: ""
    }

    componentDidMount() {
        this.pegarLista()
    }

    apagarUsuario = (id) =>{
        const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const headers = {
            headers:{
                Authorization: "matheus-grativol-joy"
            }
        }
        axios
            .delete(URL, headers)
            .then((res)=>{
                alert("Usuário(a) deletado(a) com sucesso!")
                this.pegarLista()
            })
            .catch((err)=>{
                alert(err.response.data)
            })
    }

    pegarLista = () => {
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios
            .get(URL,{
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

    buscaUsuario = (nome)=>{
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
            return <DivNomes key={usuario.id}>{usuario.name} <button onClick={() => this.apagarUsuario(usuario.id)}>X</button></DivNomes>           
        })

        return (
            <div>
                <div>
                    {lista}
                    {/* <button onClick={this.props.irParaCriarUsuario}>Ir para cadastro</button> */}
                </div>
                <div>
                    <span>Buscar usuário </span>
                    <input
                        type="text"
                        value={this.state.inputBusca}
                        onChange={this.mudaBusca}
                        placeholder='Nome para busca'
                    />
                    <button>Buscar</button>
                </div>
            </div>
        );
    }

}
