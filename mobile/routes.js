import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//import Documents from './src/pages/Documents';
//import Details from './src/pages/Details';
import Home from './src/pages/Home';
import LogonUser from './src/pages/LogonUser';

const AppStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name='Home' component={Home}/>
                <AppStack.Screen name='LogonUser' component={LogonUser}/>
            </AppStack.Navigator>
        </NavigationContainer>
        
    );
    
}