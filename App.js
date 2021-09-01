import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Front from './components/Front';


export default function App() {

  const [fontsloaded] = useFonts({
    'Pacifico-Regular' : require('./assets/fonts/Pacifico-Regular.ttf')
  })

  const Stack = createStackNavigator();
  
  if(!fontsloaded){
    return <AppLoading/>;
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Front'>
          <Stack.Screen name='Top Tracks' component={Front}/>
          <Stack.Screen name='Music' component={Main}/>
        </Stack.Navigator>
      </NavigationContainer> 
    );
  }
}