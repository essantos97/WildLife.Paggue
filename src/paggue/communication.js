import axios from 'axios'

const BASE_URL_LOGIN = 'https://ms.paggue.io/payments/api/auth/login'
const CREATE_BILLING_ORDER = 'https://ms.paggue.io/cashin/api/billing_order'
const dataAuth = {
    "client_key": "17201664443973170",
    "client_secret": "79426434429711929028"
}
const token_assign = 'e90U9lmHrEqOZXs2r51L7z8hxYRZ0HwFT7pNGyvUJUyydh4LlJfEtGIHvQB7VxCMzvxJayvx8NQQcSrhU2DDY6v4pZcNSuJOdRpU'


export const createPix = async (order) => {
    try {
        const authResponse = await postAuth()

        const headers = setHeaders(authResponse)

        const payloadPayment = createPayload(order)
        
        const response = await axios.post(CREATE_BILLING_ORDER, payloadPayment, {headers})

        return response.data
    } catch (error) {
        console.error('Erro ao gerar billing order:', error)
        throw error
    }
}

export const postAuth = async () => {
    try {
        const response = await axios.post(BASE_URL_LOGIN, dataAuth)
        return response.data
    } catch (error) {
        console.error('Erro ao fazer login na paggue:', error)
        throw error
    }
}

export const createPayload = (order) => {
    try {
        const minSeg = new Date()
        const second = minSeg.getSeconds()
        const minute = minSeg.getMinutes()
        const hour = minSeg.getHours()

        const response = {
            "payer_name": order.name,
            "amount": Number(order.amount),
            "external_id": "Venda " + Math.floor(Math.random() * 1000000) + hour + minute + second,
            "description": "compra do produto: " + order.product,
        }

        return response
    } catch (error) {
        console.error('Erro ao criar payload:', error)
        throw error
    }

}

export const setHeaders = (authResponse) => {
    try {
        const headers = {
            'X-Company-ID': Number(authResponse.user.companies[0].id),
            'Signature': token_assign,
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authResponse.access_token
        }
        return headers
    } catch (error) {
        console.error('Erro ao setar headers:', error)
        throw error
    }
}
