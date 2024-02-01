import request from './interceptor'

export function register(params) {
    return request.post('/mtUser/register',params)
}

export function login(params) {
    return request.post('/mtUser/login',params)
}

export function getToken() {
    return request.get('/user/token')
}

export function getUserData() {
    return request.get('/file/findAll')
}

export function getUserById(params) {
    return request.get(`/file/${params.id}`)
}