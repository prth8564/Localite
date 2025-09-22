import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Localite</Text>
    </View>
  );
}
function DetailsScreen(){
  return(
    <View>
      <Text>This is a test component</Text>
    </View>
  )
}

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
    <DetailsScreen />
    </>
  );
}
