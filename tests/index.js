import { Http } from '../src/api/interceptor'

const apis = [
    //url，请求方式，参数，callback
    ['/file/findAll', 'GET', null, null],
    ['/file/1', 'GET', null, null],
    ['/user/token', 'GET', null, (data) => {
        localStorage.setItem('token', data)
    }]
]

export function useGetData() {
    return apis.map(item => {
        const body = item[1] === 'GET' ? null : item[2]
        return {
            id: item[0],
            method: async () => {
                const { data } = await Http.staticFetch(item[0], {
                    method: item[1],
                    body
                })
                typeof item[3] === 'function' ? item[3](data) : null
                console.log(data);
            }
        }
    })
}

// 用法
{/* <template>
<v-container>
    <v-row>
    <v-btn class="ma-2 pa-2" v-for="item in tests" :key="item.id" @click="item.method">{{ item.id }}</v-btn>
    </v-row>
</v-container>    
</template> */}

{/* <script setup> */ }
// import { useGetData } from '../../../tests';

// const tests = useGetData()
// console.log(tests);
{/* </script> */ }
