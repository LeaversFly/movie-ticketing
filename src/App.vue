<template>
  <router-view></router-view>
  <Toaster position="top-center" rich-colors></Toaster>
</template>

<style lang="scss">
body {
  width: 100%;
}
</style>

<script setup>
import {Toaster} from "vue-sonner";
</script>