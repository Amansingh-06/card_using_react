import React from 'react';
import { MenuProvider } from './context/MenuContext';
import MenuList from './components/MenuList';
import CartCounter from './components/CartCounter';

const App = () => (
  <MenuProvider>
    <CartCounter/>
    <MenuList />
  </MenuProvider>
);

export default App;
