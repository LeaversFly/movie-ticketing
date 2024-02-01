import {defineStore} from "pinia"
import {login} from "@/api/user"
import {toast} from "vue-sonner"
import router from "@/router/index.js";

export default defineStore('userStore', {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        async setUser(params) {
            const {code, data, msg} = await login(params);
            if (code === 200) {
                toast.success('登录成功')
                this.user = data
                await router.push('/')
            }
        }
    },
    getters: {},
})