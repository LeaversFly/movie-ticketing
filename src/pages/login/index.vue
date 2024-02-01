<script setup>
import {ref} from 'vue'
import Vcode from "vue3-puzzle-vcode";
import {register} from "@/api/user.js";
import {toast} from "vue-sonner";
import useStore from "@/store/index.js";

const {userStore} = useStore()

const username = ref('')
const password = ref('')
const phone = ref('')
const email = ref('')
const code = ref('')
// 滑动验证码是否展示
const isShow = ref(false)
// 滑动验证是否成功
const isSlideSuccess = ref(false)
//登录0，注册1，忘记密码2
const tab = ref(0)

const rules = [
  [
    value => {
      if (/^[\u4e00-\u9fa5a-zA-Z0-9]{6,12}$/.test(value)) return true
      return '6-12个字符，可以包含中文，字母和数字'
    },
  ],
  [
    value => {
      if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&.]{8,}$/.test(value)) return true
      return '8-16个字符，至少包含字母,数字和特殊字符'
    },
  ],
  [
    value => {
      if (/^[0-9]{11}$/.test(value)) return true
      return '手机号格式错误'
    },
  ],
  [
    value => {
      if (/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)) return true
      return '邮箱格式错误'
    },
  ],
]

const onShow = () => {
  isShow.value = true
  toast.success('你好')
};

const onClose = () => {
  isShow.value = false
};

const onSuccess = () => {
  onClose()
  isSlideSuccess.value = true
};

const changeTab = (val) => {
  tab.value = val
  isSlideSuccess.value = false
  username.value = ''
  password.value = ''
}

const handleRegister = async () => {
  const {code, data, msg} = await register({
    username: username.value,
    password: password.value,
    phone: phone.value,
    email: email.value
  })
  if (code === 200) {
    toast.success('注册成功')
    changeTab(0)
  }
}

const handleLogin = async () => {
  await userStore.setUser({
    username: username.value,
    password: password.value,
  })
}
</script>

<template>
  <v-container class="mx-auto h-screen" style="background-color: #54539f;">
    <v-container class="bg-white rounded-lg">
      <!-- 登录 -->
      <div v-if="tab === 0">
        <v-img cover src="src/assets/images/login.png"></v-img>
        <v-form fast-fail @submit.prevent>
          <v-text-field v-model="username" label="用户名" :rules="rules[0]"></v-text-field>
          <v-text-field v-model="password" label="密码" :rules="rules[1]"></v-text-field>
          <v-btn block class="mt-2" :disabled='isSlideSuccess' @click="onShow">开始验证</v-btn>
          <Vcode :show="isShow" @success="onSuccess" @close="onClose"/>
          <v-btn type="submit" block class="mt-4" @click="handleLogin">登录</v-btn>
        </v-form>
        <v-row class="pt-3">
          <v-col>
            <v-btn variant="text" @click="changeTab(1)">立即注册</v-btn>
          </v-col>
          <v-col class="text-right">
            <v-btn variant="text" @click="changeTab(2)">忘记密码</v-btn>
          </v-col>
        </v-row>
      </div>
      <!-- 注册 -->
      <div v-else-if="tab === 1">
        <v-toolbar class="bg-white mb-2">
          <v-btn class="hidden-xs-only" icon="mdi-arrow-left" @click="changeTab(0)"/>
          <v-toolbar-title>注册</v-toolbar-title>
        </v-toolbar>
        <v-form fast-fail @submit.prevent>
          <v-text-field v-model="username" label="用户名" :rules="rules[0]"></v-text-field>
          <v-text-field v-model="password" label="密码" :rules="rules[1]"></v-text-field>
          <v-text-field v-model="phone" label="手机号" :rules="rules[2]"></v-text-field>
          <v-text-field v-model="email" label="邮箱" :rules="rules[3]"></v-text-field>
          <v-btn block class="mt-2" :disabled='isSlideSuccess' @click="onShow">开始验证</v-btn>
          <Vcode :show="isShow" @success="onSuccess" @close="onClose"/>
          <v-btn type="submit" block class="mt-4" @click="handleRegister">注册</v-btn>
        </v-form>
      </div>
      <!-- 忘记密码 -->
      <div v-else>
        <v-toolbar class="bg-white mb-2">
          <v-btn class="hidden-xs-only" icon="mdi-arrow-left" @click="changeTab(0)"/>
          <v-toolbar-title>忘记密码</v-toolbar-title>
        </v-toolbar>
        <v-form fast-fail @submit.prevent>
          <v-row class="px-3">
            <v-col cols="7" class="px-0">
              <v-text-field v-model="email" label="邮箱" :rules="rules[3]"/>
            </v-col>
            <v-col class="pr-0">
              <v-btn block style="height: 56px;">发送验证码</v-btn>
            </v-col>
          </v-row>
          <v-text-field label="验证码" class="mt-2" v-model="code"></v-text-field>
          <v-text-field label="新密码" v-model="password" :rules="rules[1]"></v-text-field>
          <v-btn type="submit" block class="mt-2">重置密码</v-btn>
        </v-form>
      </div>
    </v-container>
  </v-container>
</template>