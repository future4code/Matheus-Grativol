import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          <Post
            nomeUsuario={'Paulinha'}
            fotoUsuario={'https://picsum.photos/400/400?a=2'}
            fotoPost={'https://picsum.photos/400/400?a=1'}
          />
        </MainContainer>

        <MainContainer>
          <Post
            nomeUsuario={'Matheus'}
            fotoUsuario={'https://picsum.photos/400/400?a=3'}
            fotoPost={'https://picsum.photos/400/400?a=4'}
          />
        </MainContainer>  

        <MainContainer>
          <Post
            nomeUsuario={'Daniela'}
            fotoUsuario={'https://picsum.photos/400/400?a=5'}
            fotoPost={'https://picsum.photos/400/400?a=6'}
          />
        </MainContainer>

        <MainContainer>
          <Post
            nomeUsuario={'Salomão'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>
      </div>
      
    );
  }
}

export default App;
