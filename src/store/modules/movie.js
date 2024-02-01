import {defineStore} from "pinia"
import {getMovieById, getMovieData} from "@/api/movie"
import {da} from "vuetify/locale";

export default defineStore('movieStore', {
    state: () => {
        return {
            movieList: [],
            movie: {}
        }
    },
    actions: {
        async setMovieList() {
            const {code, data} = await getMovieData()
            if (code === 200) {
                this.movieList.push(...data)
            }
        },
        async setMovie(id) {
            const {code, data} = await getMovieById(id)
            if (code === 200) {
                data.type = data.type.split('/')
                while (data.type.length > 2) {
                    data.type.pop()
                }
                data.releaseDate = data.releaseDate.split('T')[0]
                this.movie = data
            }
        }
    },
    getters: {},
})