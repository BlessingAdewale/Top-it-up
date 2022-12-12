import React, {useEffect} from 'react';
import { Dashboard, Login } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    
useEffect(() => {
        SplashScreen.hide(); //hides the splash screen on app load.
      }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'HomeScreen'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;