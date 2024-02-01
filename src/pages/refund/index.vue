<script setup>
</script>

<template>
    <v-container class="h-screen pt-16">
        <v-app-bar>
            <template v-slot:prepend>
                <v-btn icon="mdi-arrow-left"></v-btn>
            </template>
            <v-app-bar-title>退票</v-app-bar-title>
        </v-app-bar>
        <v-textarea label="退款原因" class="mt-4"></v-textarea>
        <v-btn block>提交</v-btn>
    </v-container>
</template>