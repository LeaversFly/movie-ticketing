<script setup>
const isRefund = ref(true)
</script>

<template>
  <v-container class="h-screen">
    <v-list lines="two" class="bg-transparent">
      <v-list-item class="px-0" v-for="n in 1" :key="n">
        <v-card class="rounded-lg">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar size="150" rounded="0" class="pa-3">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
            </v-avatar>
            <div class="w-100">
              <v-card-title class="text-h6">
                铃芽之旅
              </v-card-title>
              <v-card-subtitle>南昌万达影城</v-card-subtitle>
              <v-card-subtitle>2021-06-06 13:00</v-card-subtitle>
            </div>
          </div>
          <v-divider class="my-4"></v-divider>
          <div class="d-flex justify-space-between px-4 pb-2">
            <span class="d-flex align-center">共 1 张</span>
            <v-btn :disabled="isRefund" color="#54539f">{{ isRefund ? '已退票' : '评价影片' }}</v-btn>
          </div>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>