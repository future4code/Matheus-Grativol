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
  state = {
    postagem: [
      {
        nome: "Paulinha",
        foto: 'https://picsum.photos/400/400?a=2',
        imagem: 'https://picsum.photos/400/400?a=1'
      },
      {
        nome: "Daniela",
        foto: 'https://picsum.photos/400/400?a=3',
        imagem: 'https://picsum.photos/400/400?a=4'
      },
      {
        nome: "Matheus",
        foto: 'https://picsum.photos/400/400?a=5',
        imagem: 'https://picsum.photos/400/400?a=6'
      }
    ]
  }
  render() {

    const postFeed = this.state.postagem.map((posts) => {
      return(
        <Post
          {posts.nome}
          {posts.foto}
          {posts.imagem}
        />
      )
    })
    return (
      <div>
        {/* <MainContainer>
          <Post
            nomeUsuario={'Paulinha'}
            fotoUsuario={'https://picsum.photos/400/400?a=2'}
            fotoPost={'https://picsum.photos/400/400?a=1'}
          />
        </MainContainer> */}
        <MainContainer>{postFeed}</MainContainer>
      </div>
      
    );
  }
}

export default App;
