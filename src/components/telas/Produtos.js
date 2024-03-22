import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Produto from '../produtos/produto'


export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <Produto image={require('../../../assets/imgs/arco.png')} />
            <Produto image={require('../../../assets/imgs/flecha.png')} />
            <Produto image={require('../../../assets/imgs/luva.jpg')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    productImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
})


