<template>
    <div class="login">
      <h1>注册</h1>
      <div class="login-wrapper">
        <div class="avatar">
          <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.XFX8QbYxlWx9oG2UlkbLbwHaJ0?w=153&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
        </div>
  
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="username"
              name="username"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
              v-model="nickname"
              name="nickname"
              label="昵称"
              placeholder="昵称"
              :rules="[{ required: true, message: '请填写昵称' }]"
            />
          </van-cell-group>
          <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
              注册
            </van-button>
          </div>
        </van-form>
  
      </div>
  
      <p class="register" @click="router.push('/login')">已有账号？点击登录</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from '@/api'
  import { useRouter } from 'vue-router';
  import { showToast } from 'vant';
  
  const username = ref('')
  const password = ref('')
  const nickname = ref('')
  const router = useRouter()
  
  const onSubmit = async (values) => {
    const res = await axios.post('./user/register',values)
    console.log(res);
    if(res.code === 800){
        showToast('恭喜宁，注册成功啦！');
        setTimeout(() => {
            router.push('/login')
        }, 1000);
    }
  }
  </script>
  
  <style lang="less" scoped>
  .login{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  
    h1{
      height: 0.6933rem;
      font-size: 0.48rem;
      text-align: center;
      line-height: 0.6933rem;
      margin-top: 1.12rem;
    }
    .login-wrapper{
      width: 7.44rem;
      border: 1px solid rgba(187, 187, 187, 1);
      margin: 0 auto;
      margin-top: 1.7rem;
      border-radius: 0.3rem;
      box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);
      padding-bottom: 15px;
      .avatar{
        width: 2.4rem;
        height: 2.4rem;
        margin: 1rem auto 0.77rem;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
    }
    .register{
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  :deep(.van-field__label){
    width: 45px;
  }
  </style>