import React from "react";
// import "./CardPequeno.css"
import styled from "styled-components";

const Imagem = styled.img`
    width: 30px;
    margin-right: 10px;
`
const BoxCardPequeno = styled.div`
    border: 1px solid black;
    width: 40vw;
    margin: 10px 0;
    display: flex;
    padding: 20px 5px;
    /* justify-content: center; */
`
const ConfigA = styled.a`
    text-decoration: none;
    color: black;
    padding-left: 5px;
`

const CardPequeno = (props) => {
    return(
        <BoxCardPequeno>
            <Imagem src={props.imagem}/>
            <p>{props.texto}</p>
            <ConfigA href="">{props.info}</ConfigA>
        </BoxCardPequeno>
    )
}

export default CardPequeno