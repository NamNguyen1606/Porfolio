import React from 'react';
import CardProject from './components/CardProject';
import styled from 'styled-components';
import HomeScreen from './screen/home';
const URL = "https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=948&q=80";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-column-start: 1;
  grid-column-end: 4;
`;
const Header = styled.div`
  position:  absolute;
  width: 100%;
  height: 82px;
  background-color: #3C3B3A;
`;

const HeaderBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
`;
const ImageBackground = styled.img`
  height: 100%;
  width: 100%;
  image-resolution: initial;
`;

function App() {
  return (
    <HomeScreen/>
  );
}

export default App;
