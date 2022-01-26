import axios from "axios";
import styled from "styled-components";
import { Router } from "./route/Router";
import background from "./img/background.jpg"

const ContainerPai = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  /* width: 100vw; */
  /* background-color: whitesmoke; */
  background-image: url(${background});
`

function App() {

  return (
    <ContainerPai>
      <Router/>
    </ContainerPai>
  );
}

export default App;
