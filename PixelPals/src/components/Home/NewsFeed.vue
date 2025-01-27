<template>
<van-tabs type="line" 
v-model:active="active" swipeable animated 
sticky offset-top="70"
>
<van-tab v-for="(item, index) in items" :key="index">
    <template #title>{{ item.title }}</template>
      
  </van-tab>
</van-tabs>

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