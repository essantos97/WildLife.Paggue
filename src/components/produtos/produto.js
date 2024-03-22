import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

class Produto extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={this.props.image}
                    style={styles.image}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
})

export default Produto