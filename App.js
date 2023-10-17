import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import MainScreen from './components/MainScreen';

export default function App() {
  const Stack = createStackNavigator();

  const [user, setUser] = useState([]);

  const addUser = (newUser) => {
    setUser([...user, newUser])
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" options={{ headerShown: false }} component={ Login } />

        <Stack.Screen name="cadastro">
          { props => <Cadastro {...props} addUser={ addUser } /> }
        </Stack.Screen>

        <Stack.Screen name="mainScreen">
          { props => <MainScreen {...props} data={ user } /> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
