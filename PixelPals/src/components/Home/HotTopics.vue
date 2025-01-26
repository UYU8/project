<template>
    <div>
          <van-notice-bar 
            v-for="(item, index) in items" :key="index" 
            background="#f5f5f5" color="#000"
            :scrollable ="true"
            >
              <p class="subpixel-antialiased italic">
                <van-icon name="chat" size="1rem" color="rgba(68, 68, 68, 1)" /> 
                 {{ item.content }}
              </p>
          </van-notice-bar>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { HotTopic } from "../../types/home.ts";
  
  //接口定义类型约束
  interface Props {
    items: HotTopic[];
  }
  //接收父组件传递的数据
  defineProps<Props>();
  </script>
  
  <style scoped>
  
  </style>