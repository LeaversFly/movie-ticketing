<script setup>
//是否允许付款
const canPay = ref(false)
// 选择的位置
const seat = ref({ x: null, y: null })

const selectSeat = (i, j) => {
    if (seat.value.x === i && seat.value.y === j && canPay.value) {
        canPay.value = false
    } else {
        canPay.value = true
        seat.value.x = i
        seat.value.y = j
    }
}

const handleSeatColor = computed(() =>
    (i, j) => canPay.value && seat.value.x === i && seat.value.y === j ? 'background-color: #54539f' : '')

const handlePay = () => {
    console.log(seat.value);
}
</script>

<template>
    <v-container class="h-screen pa-0">
        <v-toolbar class="bg-white" style="position: fixed;z-index: 999;">
            <v-btn class="hidden-xs-only" icon="mdi-arrow-left" @click="$router.push('/cinema')" />
            <v-toolbar-title>影院名称</v-toolbar-title>
        </v-toolbar>
        <div class="bg-grey-lighten-4 w-100" style="height:42px;position: fixed;top:64px;z-index: 999;">
            <div class="w-50 text-center mx-auto my-2"
                style="border: 3px solid red;border-radius: 100% 100% 0 0/100%;border-bottom: none;border-left: none;border-right: none;">
                银幕
            </div>
        </div>
        <v-container class="pt-16 px-8 mt-12 w-screen">
            <div class="mx-auto">
                <span v-for="i in  10 " :key="i" class="d-flex justify-space-between">
                    <span v-for="j in  15 " :key="j" class="pa-2 rounded mt-2" style="border: 1px solid #54539f;"
                        :style="handleSeatColor(i, j)" @click="selectSeat(i, j)"></span>
                </span>
            </div>
        </v-container>
        <div class="w-100" style="position: fixed;z-index: 999;bottom: 0;">
            <div class="bg-white pa-4">
                <h4>三大队</h4>
                <div>
                    <span class="text-red">今天</span> · 01月09日 · 19:15-21:27 · 国语 · 2D
                </div>
            </div>
            <v-btn block :disabled="!canPay" size="large" @click="handlePay">{{ canPay ? '立即付款' : '请先选座' }}</v-btn>
        </div>
    </v-container>
</template>