import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CssFormatter from './components/CssFormatter';
import Home from './components/Home';
import HtmlFormatter from './components/HtmlFormatter';
import JsonFormatter from './components/JsonFormatter';
import PasswordGenerator from './components/PasswordGenerator';
import SecretKeyGenerator from './components/SecretKeyGenerator';
import SideBar from './components/SideBar';
import SwitchTheme from './components/SwitchTheme';

function App() {
  return (
    <>
      <div>header</div>
      <Flex>
        <BrowserRouter>
          <SideBar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/passwordGenerator'
                element={<PasswordGenerator />}
              />
              <Route
                path='/secretKeyGenerator'
                element={<SecretKeyGenerator />}
              />
              <Route path='/htmlFormatter' element={<HtmlFormatter />} />
              <Route path='/cssFormatter' element={<CssFormatter />} />
              <Route path='/jsonFormatter' element={<JsonFormatter />} />
            </Routes>
          </main>
        </BrowserRouter>
        <SwitchTheme />
      </Flex>
    </>
  );
}

export default App;
