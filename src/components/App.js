import { createGlobalStyle, ThemeProvider } from 'styled-components';
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

const theme = {
  primaryColor: '#090979',
  secondaryColor: '#00d4ff',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

/*
  <Button>Primary Button</Button>
  <Button secondary>Secondary Button</Button>
  <Button disabled>Disabled Button</Button>
  <Button large>Large Button</Button>
*/
