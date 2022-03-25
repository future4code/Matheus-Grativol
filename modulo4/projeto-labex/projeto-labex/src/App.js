import axios from "axios";
import styled from "styled-components";
import { Router } from "./route/Router";
import background from "./img/background.jpg"

const ContainerPai = styled.div`
  display: grid;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  align-items: stretch;
  /* flex-grow: 1; */
  /* height: 100vh; */
  /* margin-top: 25%; */
  /* width: 100vw; */
  /* background-color: whitesmoke; */
  background-image: url(${background});
`

function App() {

  return (
    <ContainerPai>
      {/* <div></div> */}
      <div>
        <Router/>
      </div>
      {/* <div></div> */}
    </ContainerPai>
  );
}

export default App;
