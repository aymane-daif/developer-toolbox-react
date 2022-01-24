import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import PasswordGenerator from './components/PasswordGenerator';
import SideBar from './components/SideBar';
import SwitchTheme from './components/SwitchTheme';

function App() {
  return (
    <>
      <div>header</div>
      <Flex>
        <SideBar />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/passwordGenerator'
                element={<PasswordGenerator />}
              />
            </Routes>
          </BrowserRouter>
        </main>
        <SwitchTheme />
      </Flex>
    </>
  );
}

export default App;
