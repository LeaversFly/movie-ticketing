<script setup>
const colors = [
    'green',
    'secondary',
    'yellow darken-4',
    'red lighten-2',
    'orange darken-1',
]
const slides = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
]

const tab = ref(null)
</script>

<template>
      <v-container class="h-screen pa-0">
        <v-toolbar class="bg-white" style="position: fixed;z-index: 999;">
            <v-btn class="hidden-xs-only" icon="mdi-arrow-left" @click="$router.push('/')" />
            <v-toolbar-title>电影详情</v-toolbar-title>
        </v-toolbar>
        <!-- 滚动图片 -->
        <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-square"
            height="300">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%" tile>
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">
                            {{ slide }} Slide
                        </div>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <v-container class="bg-white rounded-lg pb-12">
            <!-- 简介 -->
            <v-row no-gutters>
                <v-col class="py-2 pl-2">
                    <v-img cover class="rounded-lg h-100" src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                </v-col>
                <v-col class="py-2">
                    <v-card>
                        <v-card-title class="text-h5">
                            铃芽之旅
                        </v-card-title>
                        <v-card-subtitle class="pt-1">英文名</v-card-subtitle>
                        <v-card-text class="pt-1">
                            <v-chip label class="mr-2">
                                奇幻
                            </v-chip>
                            <v-chip label class="mr-2">
                                灾害
                            </v-chip>
                        </v-card-text>
                        <v-card-text class="pt-1">2023.12.31 13:13 中国大陆上映 169分钟</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <!-- 评分 -->
            <v-row dense>
                <v-card class="d-flex flex-column w-100">
                    <div class="d-flex align-center flex-column my-auto">
                        <div class="text-h2 mt-5">
                            9.5
                            <span class="text-h6">/10</span>
                        </div>
                        <v-rating :model-value="3.5" color="#54539f" half-increments></v-rating>
                        <div class="px-3">3,360 个评价</div>
                    </div>
                    <v-list bg-color="transparent" class="d-flex flex-column-reverse" density="compact">
                        <v-list-item v-for="(rating, i) in 5" :key="i">
                            <v-progress-linear :model-value="rating * 15" class="mx-n5" color="#54539f" height="20"
                                rounded></v-progress-linear>
                            <template v-slot:prepend>
                                <span>{{ rating }}</span>
                                <v-icon icon="mdi-star" class="mx-3"></v-icon>
                            </template>
                            <template v-slot:append>
                                <div class="rating-values">
                                    <span class="d-flex justify-end"> {{ rating * 224 }} </span>
                                </div>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-row>
            <v-divider></v-divider>
            <!-- 三栏 -->
            <v-tabs grow color="#54539f" v-model="tab">
                <v-tab :value="1">简介</v-tab>
                <v-tab :value="2">评论</v-tab>
                <v-tab :value="3">资料</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item v-for="n in 3" :key="n" :value="n">
                    <v-card class="mx-auto" v-for="m in 3" :key="m">
                        <v-row no-gutters>
                            <v-col cols="auto">
                                <v-card-item class="px-0">
                                    <v-avatar size="x-large">
                                        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                                    </v-avatar>
                                </v-card-item>
                            </v-col>
                            <v-col>
                                <v-card-item>
                                    <v-card-title>
                                        昵称{{ m }}
                                    </v-card-title>
                                    <v-card-subtitle>
                                        <span class="me-1">时间 · 地点</span>
                                    </v-card-subtitle>
                                </v-card-item>
                                <v-card-text class="pb-0">
                                    <div>评论内容</div>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn prepend-icon="mdi-thumb-up-outline">
                                        点赞
                                    </v-btn>
                                    <v-btn prepend-icon="mdi-comment-outline">
                                        评论
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-container>
        <v-toolbar density="compact" style="position: fixed;z-index: 999;bottom: 0;">
            <v-btn block class="h-100 ma-0" style="background-color: #54539f;color: white;"
                @click="$router.push('/cinema')">立即购票</v-btn>
        </v-toolbar>
    </v-container>    
</template>