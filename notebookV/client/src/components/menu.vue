<template>
    <div class="menu-wrap">
      <div class="back" @click="hideMenu">
        <van-icon name="arrow-left" size="26px"/>
      </div>
      <section class="header">
        <div class="avatar">
          <img src="https://ts1.cn.mm.bing.net/th?id=OIP-C.VPEgMv0eQNiRrxwZddXf7AHaJz&w=115&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="">
        </div>
        <p class="user">用户123</p>
      </section>
  
      <div class="setting">
        <div class="set-item">
          <van-icon name="contact" size="0.4rem"/>
          <span>个人主页</span>
        </div>
        <div class="set-item">
          <van-icon name="bullhorn-o" size="0.4rem"/>
          <span>通知</span>
        </div>
        <div class="set-item">
          <van-icon name="revoke" size="0.4rem"/>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

const emits = defineEmits(['hidden']) //定义事件
const hideMenu = () => {
    emits('hidden',false)
}

  
  </script>
  
  <style lang="less" scoped>
  .menu-wrap{
    background-color: #e8e6e8;
    padding: 1.4rem 1rem;
    box-sizing: border-box;
    .back{
      position: absolute;
      top: 15px;
      left: 15px;
    }
    .header{
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 10px;
        img{
          width: 100%;
        }
      }
      .user{
        color: #101010;
        font-size: 0.37333rem;
      }
    }
    .setting{
      margin-top: 1rem;
      padding-left: 30%;
      .set-item{
        height: 1.2rem;
        line-height: 1.2rem;
        span{
          font-size: 0.4rem;
          color: #101010;
          margin-left: 10px;
        }
      }
    }
  }
  </style>