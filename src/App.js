import "./App.css";
import CrossAnim from "./CrossAnim";
import styled from "styled-components";
import Container from "./Context/Container";
import { useContext } from "react";
import Buttons from "./Buttons";
// const C = CSSPlugin;

const Main = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const App = () => {
  return (
    <Container>
      <Main className="App">
        <CrossAnim />
        <Buttons />
      </Main>
    </Container>
  );
};

export default App;
