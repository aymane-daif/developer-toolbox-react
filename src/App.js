import { Flex } from '@chakra-ui/react';
import './App.css';
import PasswordGenerator from './components/PasswordGenerator';
import SideBar from './components/SideBar';
import SwitchTheme from './components/SwitchTheme';

function App() {
  return (
    <Flex>
      <SideBar />
      <main>
        <PasswordGenerator />
      </main>
      <SwitchTheme />
    </Flex>
  );
}

export default App;
