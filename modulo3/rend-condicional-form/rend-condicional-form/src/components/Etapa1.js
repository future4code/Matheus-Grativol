import React from "react";
import etapa2 from "./Etapa2";

export default class etapa1 extends React.Component{
    state = {
        etapa1: ""
    }

    irParaProximaEtapa = () =>{
        this.setState({etapa1 : "etapa2"})
    }

    render() {
        return(
            <div>
                <h1>
                    Etapa 1 - Dados Gerais
                </h1>
                <ol>
                    <li>
                        <p>Qual o seu nome?</p>
                        <input/>
                    </li>
                    <li>
                        <p>Qual sua idade?</p>
                        <input/>
                    </li>
                    <li>
                        <p>Qual seu email?</p>
                        <input/>
                    </li>
                    <li>
                        <p>Qual a sua escolaridade?</p>
                        <select name="">
                            <option value="Ensino médio incompleto" selected>Ensino médio incompleto</option>
                            <option value="Ensino médio completo">Ensino médio completo</option>
                            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                            <option value="Ensino superior completo">Ensino superior completo</option>
                        </select>
                    </li>
                </ol>
            </div>
        )
    }
}