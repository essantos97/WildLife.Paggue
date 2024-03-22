
/**
 * import React from 'react'
import { Button } from 'react-native'
import { createPix } from '../paggue/communication'

export default props => {
    async function utilPaggue() {
        try {
            const order = { "name": "Zé de loia", "product": "sabonete phebo", "amount": 125 }
            const response = await createPix(order)
            navigation.navigate('QrCode', { variavel: response.payment })
        } catch (error) {
            console.error('Erro ao fazer a solicitação POST:', error)
        }
    }
    return (
        <Button title='Finalizar Compra' onPress={utilPaggue} />
    )
    
}
 */

import React from 'react';
import { Button } from 'react-native';
import { createPix } from '../paggue/communication';
import { useNavigation } from '@react-navigation/native'; 

export default function MyButton() {
  const navigation = useNavigation(); 

  async function utilPaggue() {
    try {
      const order = { "name": "Zé de loia", "product": "sabonete phebo", "amount": 125 };
      const response = await createPix(order);
      console.warn('Resposta da solicitação POST:', response);
      
      navigation.navigate('QrCode', { variavel: response.payment });
    } catch (error) {
      console.error('Erro ao fazer a solicitação POST:', error);
    }
  }

  return (
    <Button title='Finalizar Compra' onPress={utilPaggue} />
  );
}

