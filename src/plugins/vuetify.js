import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
    defaults: {
        VBtn: {
            variant: 'flat',
            color: '#54539f'
        },
        VBottomNavigation: {
            color: '#54539f'
        },
        VCard: {
            flat: true
        }
    },
})