<script setup>
import router from '@/router'

const index = ref(router.currentRoute.value.path)
</script>

<template>
    <v-bottom-navigation grow active v-model="index">
        <v-btn @click="$router.push('/')" value="/">
            <v-icon>mdi-home-outline</v-icon>
            <span>主页</span>
        </v-btn>
        <v-btn @click="$router.push('/wallet')" value="/wallet">
            <v-icon>mdi-ticket-confirmation-outline</v-icon>
            <span>票夹</span>
        </v-btn>
        <v-btn @click="$router.push('/user')" value="/user">
            <v-icon>mdi-account-outline</v-icon>
            <span>我的</span>
        </v-btn>
    </v-bottom-navigation>
</template>