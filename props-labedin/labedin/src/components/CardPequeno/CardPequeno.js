import React from "react";
import "./CardPequeno.css"

const CardPequeno = (props) => {
    return(
        <div calssName = "smallCard">
            <img src={props.imagem}/>
            <p>{props.texto}</p>
            <a href="matheus_grati@hotmail.com">{props.info}</a>
        </div>
    )
}

export default CardPequeno