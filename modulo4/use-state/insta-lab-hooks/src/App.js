import React, {useState} from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"
// import { useState } from 'react';

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  // const [Usuário, setUsuario] = useState("")

  return (
    <AppContainer>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </AppContainer>
  );
}


export default App;
