import React from 'react';
import { MenuProvider } from './context/MenuContext';
import MenuList from './components/MenuList';

const App = () => (
  <MenuProvider>
    <MenuList />
  </MenuProvider>
);

export default App;
