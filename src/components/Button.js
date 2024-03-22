
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
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

export default function MyButton() {
  const navigation = useNavigation(); // Obter o objeto de navegação usando o hook useNavigation

  async function utilPaggue() {
    try {
      const order = { "name": "Zé de loia", "product": "sabonete phebo", "amount": 125 };
      const response = await createPix(order);
      console.warn('Resposta da solicitação POST:', response);
      
      // Navegar para a tela QrCode passando o valor do campo 'payment'
      navigation.navigate('QrCode', { variavel: response.payment });
    } catch (error) {
      console.error('Erro ao fazer a solicitação POST:', error);
    }
  }

  return (
    <Button title='Finalizar Compra' onPress={utilPaggue} />
  );
}

