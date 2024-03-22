
/** 
 * import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import telaPrincipal from './components/telas/telaPrincipal'

const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="tela1">
                <Stack.Screen name="tela1" component={telaPrincipal} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
 * 
*/


import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Produto from './components/produtos/produto'
import Header from './components/Header'
import Button from './components/Button'
import Count from './components/Count'
import AppContainer from './Navigation'; // Importe o componente AppContainer



export default class App extends Component {
    render() {
        return (

            <View style={{ flex: 1 }}>
                <Header />
                <Count initial={0} passo={10}/>
                <Produto image={require('../assets/imgs/arco.png')} />
                <Produto image={require('../assets/imgs/flecha.png')} />
                <Produto image={require('../assets/imgs/luva.jpg')} />
                <Button />
            </View>
        )
    }
}
