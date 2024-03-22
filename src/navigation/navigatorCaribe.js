import { NavigationContainer, StackNavigator } from '@react-navigation/native';
import Principal from './telas/Principal';
import Secundaria from './telas/Secundaria';
import { navegarParaSecundaria } from './navegacao';

const Stack = createStackNavigator();

const App = () => {
  // ... configuração de NavigationContainer

  return (
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Secundaria" component={Secundaria} />
    </Stack.Navigator>
  );
};

export default App;
