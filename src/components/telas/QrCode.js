import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const QrCode = ({ route }) => {
    const { variavel } = route.params

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${variavel}` }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
})

export default QrCode
