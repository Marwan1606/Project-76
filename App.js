import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCraft';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRoute = "Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DailyPic" component={DailyPic} />
      <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
      <Stack.Screen name="StarMap" component={StarMap} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
   <StackNav />
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
