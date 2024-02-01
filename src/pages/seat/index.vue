<script setup>
import {getPayInfo} from "@/api/order.js";
import {toast} from "vue-sonner";

//是否允许付款
const canPay = ref(false)
// 选择的位置
const seat = ref({x: null, y: null})
// 控制支付界面是否弹出
const paying = ref(false)
// 支付表单
const payForm = ref('')

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

const popPayDialog = async () => {
  console.log(seat.value);
  paying.value = true
  const {data} = await getPayInfo()
  payForm.value = data
  toast.info('即将跳转到支付页面！')
  await nextTick(() => {
    document.forms[0].submit()
  })
}
</script>

<template>
  <v-container class="h-screen pa-0">
    <v-toolbar class="bg-white" style="position: fixed;z-index: 999;">
      <v-btn class="hidden-xs-only" icon="mdi-arrow-left" @click="$router.push('/cinema')"/>
      <v-toolbar-title>影院名称</v-toolbar-title>
    </v-toolbar>
    <div class="bg-grey-lighten-4 w-100" style="height:42px;position: fixed;top:64px;z-index: 999;">
      <div class="w-50 text-center mx-auto my-2"
           style="border-radius: 100% 100% 0 0/100%;border: 3px none red;border-top-style: solid;">
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
        <h4>奥本海默</h4>
        <div>
          <span class="text-red">今天</span> · 01月09日 · 19:15-21:27 · 国语 · 2D
        </div>
      </div>
      <v-btn block :disabled="!canPay" size="large" @click="popPayDialog">{{ canPay ? '立即付款' : '请先选座' }}</v-btn>
      <div v-html="payForm"></div>
    </div>
  </v-container>
</template>