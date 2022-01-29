import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CssFormatter from './components/CssFormatter';
import Header from './components/Header';
import Home from './components/Home';
import HtmlFormatter from './components/HtmlFormatter';
import ImageCompressor from './components/ImageCompressor';
import JavascriptFormatter from './components/JavascriptFormatter';
import JsonFormatter from './components/JsonFormatter';
import PasswordGenerator from './components/PasswordGenerator';
import SecretKeyGenerator from './components/SecretKeyGenerator';
import SideBar from './components/SideBar';
import SwitchTheme from './components/SwitchTheme';
import XmlFormatter from './components/XmlFormatter';

function App() {
  return (
    <>
      <Header />
      <Flex>
        <BrowserRouter>
          <SideBar />
          <Box mt='12' w='80%' h='90vh' mx='10'>
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
              <Route
                path='/javascriptFormatter'
                element={<JavascriptFormatter />}
              />
              <Route path='/xmlFormatter' element={<XmlFormatter />} />
              <Route path='/imageCompressor' element={<ImageCompressor />} />
            </Routes>
          </Box>
        </BrowserRouter>
        <SwitchTheme />
      </Flex>
    </>
  );
}

export default App;
