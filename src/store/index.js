import useRouteStore from './modules/route'
import useMovieStore from './modules/movie'
import useUserStore from './modules/user'

export default function useStore() {
    return {
        routeStore: useRouteStore(),
        movieStore: useMovieStore(),
        userStore: useUserStore()
    }
}