<script setup>
const tab = ref(null)
const city = ref('南昌')

const items = ['南昌', '北京', '上海', '广东']
</script>

<template>
    <v-app-bar flat rounded>
        <v-row no-gutters>
            <v-col cols="3">
                <v-select variant="solo" flat class="pa-0" hide-details v-model="city" :items="items"></v-select>
            </v-col>
            <v-col cols="6">
                <v-tabs color="#54539f" align-tabs="center" v-model="tab">
                    <v-tab class="pa-0" :value="1">正在热映</v-tab>
                    <v-tab class="pa-0" :value="2">即将上映</v-tab>
                </v-tabs>
            </v-col>
        </v-row>
    </v-app-bar>
</template>
