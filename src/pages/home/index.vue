<script setup>
import tabs from '@/layouts/tabs/index.vue'
</script>

<template>
    <v-container class="h-screen pt-16">
        <tabs />
        <v-list lines="two" class="mt-4 bg-transparent">
            <v-list-item class="px-0" v-for="n in 3" :key="n">
                <v-card class="rounded-lg">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <v-avatar size="150" rounded="0">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                        </v-avatar>
                        <div class="w-100" @click="$router.push('/detail')">
                            <v-card-title class="text-h5">
                                铃芽之旅
                            </v-card-title>
                            <v-card-subtitle>奇幻</v-card-subtitle>
                            <v-card-subtitle class="font-weight-black">
                                <v-container class="px-0">
                                    <v-row>
                                        <v-col class="text-h4 pr-0" cols="4">
                                            <p style="color: #565399">9.5</p>
                                        </v-col>
                                        <v-col class="px-0">
                                            <v-col class="pa-0">
                                                导演：1
                                            </v-col>
                                            <v-col class="pa-0">
                                                主演：2
                                            </v-col>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-subtitle>
                        </div>
                    </div>
                </v-card>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<style scoped></style>
