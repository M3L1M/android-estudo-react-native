import 'react-native-gesture-handler'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';
import HomeProduto from './src/pages/Produto/HomeProduto';
import AdicionarProduto from './src/pages/Produto/AdicionarProduto';
import ListarProdutos from './src/pages/Produto/ListarProdutos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Produtos"
          component={HomeProduto}
        />

        <Stack.Screen
          name="AdicionarProduto"
          component={AdicionarProduto}
        />

        <Stack.Screen
          name="ListarProdutos"
          component={ListarProdutos}
        />

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
