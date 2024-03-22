import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Produtos from '../components/telas/Produtos'
import Principal from '../components/telas/Principal'
import Secundaria from '../components/telas/Secundaria'

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Principal">
            <Stack.Screen name="Produtos" component={Produtos} />
            <Stack.Screen name="Principal" component={Principal} />
            <Stack.Screen name="Tela De Pagamento" component={Secundaria} />
        </Stack.Navigator>
    )
}
export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}


