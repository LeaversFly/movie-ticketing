<script setup>
const files = reactive([
    {
        title: '头像',
        value: 'https://cdn.vuetifyjs.com/images/john.jpg',
        show: false
    },
    {
        title: '手机号',
        value: '122321313123',
        show: false
    },
    {
        title: '性别',
        value: '男',
        show: false
    },
])
</script>

<template>
    <v-container class="h-screen pa-0">
        <v-toolbar class="bg-white" style="position: fixed;z-index: 999;">
            <v-btn class="hidden-xs-only" icon="mdi-arrow-left" @click="$router.push('/user')" />
            <v-toolbar-title>个人信息</v-toolbar-title>
        </v-toolbar>
        <div class="mt-16 pt-4"></div>
        <v-list lines="two" class="rounded-lg">
            <v-list-item v-for="file in  files" :key="file.title" :title="file.title" @click="file.show = true">
                <template v-slot:append>
                    <v-avatar v-if="file.title === '头像'">
                        <v-img :src='file.value'></v-img>
                    </v-avatar>
                    <span class="text-disabled" v-else>
                        {{ file.value }}
                    </span>
                    <v-btn icon="mdi-chevron-right" variant="text" disabled></v-btn>
                </template>
                <v-dialog v-model="file.show" persistent>
                    <v-card>
                        <v-card-text>
                            <v-file-input :label="file.title" required variant="underlined"
                                v-if="file.title === '头像'"></v-file-input>
                            <v-radio-group v-else-if="file.title === '性别'" hide-details v-model="file.value">
                                <v-radio label="男" value="男"></v-radio>
                                <v-radio label="女" value="女"></v-radio>
                            </v-radio-group>
                            <v-text-field :label="file.title" required variant="underlined" v-else></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn variant="text" @click="file.show = false">
                                取消
                            </v-btn>
                            <v-btn variant="text" @click="file.show = false">
                                保存
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-list-item>
        </v-list>
    </v-container>
</template>