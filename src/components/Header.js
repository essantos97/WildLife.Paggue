import { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import icon from '../../assets/imgs/wildlife.png'
import { Text } from '@rneui/base'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.tittle}> Wild Life</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#000'
    }, rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    tittle: {
        color: '#BBB',
        height: 40,
        fontSize: 30
    }
})

export default Header