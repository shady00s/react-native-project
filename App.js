/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { IntroPage } from './pages/introPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoviesRoutepage } from './pages/moviesProject/moviesRouting';
import 'react-native-gesture-handler';
import { Cvpage } from './pages/cv/cvPage';
import { MovieDetails } from './pages/moviesProject/movieDetails';


const Stack = createNativeStackNavigator();
function App() {


  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="introPage" component={IntroPage} />
        <Stack.Screen name="moviesApp" component={MoviesRoutepage} />
        <Stack.Screen name="cvPage" component={Cvpage} />
        <Stack.Screen name="moviesdetails" component={MovieDetails} />

      </Stack.Navigator>

    </NavigationContainer>

  );
};



export default App;
