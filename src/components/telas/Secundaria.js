import React from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native'


const Secundaria = ({ route }) => {
    const { valor, ...otherProps } = route.params 
    console.log(route.params.resposta.payment)
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=' + route.params.resposta.payment }}
                style={styles.image}
            />
            
            <Text style={styles.text}>Pix Copia e Cola: </Text>
            <Text style={styles.text}>{route.params.resposta.payment}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginHorizontal:40
    },
    image: {
        width: 300,
        height: 300,
        marginBottom:50
    },
})

export default Secundaria
