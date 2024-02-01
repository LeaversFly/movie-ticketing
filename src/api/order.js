import request from './interceptor'

export function getPayInfo() {
    return request.get('/mtOrder/pay')
}