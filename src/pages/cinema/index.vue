<script setup>
const date = ref('1-1')
const dates = ['1-1', '1-2', '1-3', '1-4']
const city = ref('南昌')
const cities = ['南昌', '北京', '上海', '广东']
const cinema = ref('南昌万达')
const cinemas = ['南昌万达', '北京万达', '上海万达', '广东万达']
</script>

<template>
    <v-container class="h-screen pa-0">
        <v-toolbar class="bg-white" style="position: fixed;z-index: 999;">
            <v-btn class="hidden-xs-only" icon="mdi-arrow-left" @click="$router.push('/detail')" />
            <v-toolbar-title>电影标题</v-toolbar-title>
        </v-toolbar>
        <v-toolbar bg-color="#54539f" class="bg-white">
            <template v-slot:extension>
                <v-tabs v-model="date">
                    <v-tab v-for="date in dates" :key="date" :value="date">
                        {{ date }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
        <v-row no-gutters class="bg-white">
            <v-col cols="4">
                <v-select variant="solo" flat close-text hide-details :items="cities" v-model="city"></v-select>
            </v-col>
        </v-row>
        <v-window class="pa-2" v-model="cinema">
            <v-window-item v-for="cinema in cinemas" :key="cinema" :value="cinema">
                <v-card class="rounded-lg pa-4" @click="$router.push('/seat')">
                    <v-row no-gutters justify="space-between">
                        <v-col>
                            <span class="text-h5">万达影城</span>
                        </v-col>
                        <v-col cols="3" align-self="center">
                            <span class="text-red">44.5</span>元起
                        </v-col>
                    </v-row>
                    <v-row no-gutters justify="space-between">
                        <v-col>东湖区八一大道333号</v-col>
                        <v-col cols="3">1.32km</v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col>
                            近期场次：19:00
                        </v-col>
                    </v-row>
                </v-card>
            </v-window-item>
        </v-window>
    </v-container>
</template>