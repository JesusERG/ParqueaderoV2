import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import Settings from '../screens/Settings';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
