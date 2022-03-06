import { Button } from 'components/common';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'components/pages/Login';
import Home from 'components/pages/Home';

const GlobalStyle = createGlobalStyle`
body{
  background:white ;
  min-height:100vh ;
  margin: 0;
  color: black;
  font-family:'Kaushan Script' ;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*
  <Button>Primary Button</Button>
  <Button secondary>Secondary Button</Button>
  <Button disabled>Disabled Button</Button>
  <Button large>Large Button</Button>
*/
