import request from './interceptor'

export function getMovieData() {
    return request.get('/mtMovie/all')
}

export function getMovieById(id) {
    return request.get(`/mtMovie/${id}`)
}