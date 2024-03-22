import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import App from '../App'
import QrCode from '../components/telas/QrCode'

const Stack = createStackNavigator()

function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={App} />
            <Stack.Screen name="QrCode" component={QrCode} />
        </Stack.Navigator>
    )
}

export default function AppContainer() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}
