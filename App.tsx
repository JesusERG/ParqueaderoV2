/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
