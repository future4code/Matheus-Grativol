import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto01 from './';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Matheus Grativol" 
          descricao="Oi, eu sou o Matheus. tenhon 31 anos moro em Nova Friburgo RJ, sou casado e tenho um filho lindo chamado Salomão, tenho a organização como ponto forte e dificuldade de falar em publico como ponto fraco"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>

        <div>
          <CardPequeno
            imagem="https://www.flaticon.com/br/autores/secret-studio"
            texto="Email:"
            info="matheus_grati@hotmail.com"
          />
        </div>
        

        <div>
          <CardPequeno
            imagem=""
            texto="Endereço:"
            info="Rua Alfredo Lopes de carvalho, 23"
        />
        </div>
      
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Correios de Nova Friburgo" 
          descricao="Atualmente trabalho tercerizado no Correios!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Minstério Público RJ" 
          descricao="Fiz 1 ano de estágio no Ministério Publico do Rio de Janeiro." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
