import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens';
const Drawer = createDrawerNavigator();

function drawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Home} />
      <Drawer.Screen name="Settings" component={Home} />
    </Drawer.Navigator>
  );
}

export default drawer;
