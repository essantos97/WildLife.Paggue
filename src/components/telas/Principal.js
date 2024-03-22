import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { createPix } from '../../paggue/communication'
import Produto from '../produtos/produto'

import Secundaria from './Secundaria'
import Header from '../Header'

export default function Principal({ navigation }) {
    const [valor, setValor] = useState('')

    const handleButtonPress = async (valor, produto, comprador) => {
        const objeto = {
            "name": comprador,
            "product": produto,
            "amount": valor,
        }

        const resposta = await createPix(objeto)
        console.log(resposta)
        navigation.navigate('Tela De Pagamento', { resposta })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header />
                <Produto image={require('../../../assets/imgs/arco.png')} />
                <View style={styles.buttonRow}>
                    <Button
                        title="R$ 1,50 - Arco Aleja Branco (Super Reforçado) - Fabricante Tramontina" onPress={() => handleButtonPress(150, "arco", "indio")}
                    />
                </View>
                <Produto image={require('../../../assets/imgs/flecha.png')} />
                <View style={styles.buttonRow}>
                    <Button
                        title="R$ 2,00 - Flecha Fura Olho - Fabricante Icardi" onPress={() => handleButtonPress(200, "flecha", "marquinhos")}
                    />
                </View>
                <Produto image={require('../../../assets/imgs/luva.jpg')} />
                <View style={styles.buttonRow}>
                    <Button
                        title="R$ 1,00 - Luvinha de Condomínio (Super Macia) - Fabricante Vittar" onPress={() => handleButtonPress(100, "luva", "são paulino")}
                    />
                </View>
                <Button color='#0ec882' title="Ir para Tela De Pagamento" onPress={() => handleButtonPress(300)} />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
    },
    text: {
        fontSize: 20,
    },
    legenda: {
        fontSize: 25,
    },
    buttonRow: {
        flexBasis: 150,
        marginVertical: 5,
        justifyContent: 'space-evenly',
    },
})
