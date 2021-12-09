import React from "react";

export default class etapa2 extends React.Component{
    state = {
        
    }

    render() {
        return(
            <div>
                <h1>Etapa 2 - Informações do ensino superior</h1>
                <ol>
                    <li>
                        <p>Qual Curso?</p>
                        <input/>
                    </li>
                    <li>
                        <p>Qual a unidade de ensino?</p>
                        <input/>
                    </li>
                </ol>
            </div>
            
        )
    }
}