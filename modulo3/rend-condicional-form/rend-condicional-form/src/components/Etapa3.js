import React from "react";

export default class etapa3 extends React.Component{
    state = {
        
    }

    render() {
        return(
            <div>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                <ol>
                    <li>
                        <p>Por que você não terminou um curso de graduação?</p>
                        <input/>
                    </li>
                    <li>
                        <p>Você fez algum curso complementar?</p>
                        <select>
                            <option value="Nenhum">Nenhum</option>
                            <option value="Curso técnico">Curso técnico</option>
                            <option value="Curso de Inglês">Curso de Inglês</option>
                        </select>
                    </li>
                </ol>
            </div>
        )
    }
}