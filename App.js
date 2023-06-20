
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import react from 'react';
import Home from './Home'
import FlexBox from './FlexBox';
export default function App() {
  Stack=createNativeStackNavigator();
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{'title':'Welcome'}}></Stack.Screen>
          <Stack.Screen name='FlexBox' component={FlexBox} options={{'title':'FlexBox'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
  
 

  
}


