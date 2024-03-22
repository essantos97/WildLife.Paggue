import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import Estilo from './Estilo'

export default props => {
    const [qtd, setQtd] = useState(props.initial)

    const inc = () => {
        setQtd(qtd + props.passo)
    }

    const dec = () => {
        setQtd(qtd - props.passo)
    }

    return (
        <View>
            <Button title="+" onPress={inc} />
            <Text style={Estilo.txtG}>{qtd}</Text>
            <Button title="-" onPress={dec} />
        </View>
    )
}