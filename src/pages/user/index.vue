<script setup>
import useStore from "@/store/index.js";
import {storeToRefs} from "pinia";

const items = [
  {text: '消息中心', icon: 'mdi-message-processing-outline'},
  {text: '收货地址', icon: 'mdi-map-marker-outline'},
  {text: '在线客服', icon: 'mdi-face-agent'}
]

const {userStore} = useStore()
const {user} = storeToRefs(userStore)
</script>

<template>
  <v-container class="h-screen">
    <v-card class="mx-auto rounded-lg">
      <v-list>
        <v-list-item :prepend-avatar="user.avatar" :title="user.username">
          <template v-slot:append>
            <v-btn size="small" variant="text" icon="mdi-cog-outline" @click="$router.push('/setting')"></v-btn>
          </template>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list :lines="false" density="compact" nav>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="#54539f">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>