import React from 'react'
import { Text } from 'react-native'

export default function Comp(){
    return <Text>Comp </Text>
}

export function Comp1(){
    return <Text>Comp </Text>
}

export function Comp2(){
    return <Text>Comp </Text>
}

//posso também exportar assim:
/**
 * Retirar o export das funções e chamar assim
 * export {Comp1, Comp2}
 * export default Comp
 */