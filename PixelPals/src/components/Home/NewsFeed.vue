<template>
    <div class="">
        <van-tabs v-model:active="active" sticky swipeable animated offset-top="86px">
            <van-tab v-for="(item,index) in items":key="index" class="bg-gradient-to-b from-white to-gray-200">
                {{ item.title }}
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup lang="ts">

import type { NewsFeed } from '../../types/home.ts';
import { ref } from 'vue';

const active = ref(0)
  
  //接口定义类型约束
  interface Props {
    items: NewsFeed[];
  }
  //接收父组件传递的数据
  defineProps<Props>();
</script>

<style lang="scss" scoped></style>