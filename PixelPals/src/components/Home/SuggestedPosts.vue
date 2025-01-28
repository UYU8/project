<template>
  <div>
    <van-swipe :autoplay="2000" lazy-render>
      <van-swipe-item v-for="(item, index) in items" :key="index">
        <div class="relative rounded-lg p-2">
          <img :src="item.img" class="w-full rounded-lg" />
          <p
            class="absolute bottom-0 left-0 right-0 text-white p-5 text-center"
          >
            {{ item.describe }}
          </p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import type { SuggestedPost } from "../../types/home.ts";

//接口定义类型约束
interface Props {
  items: SuggestedPost[];
}
//接收父组件传递的数据
defineProps<Props>();
</script>

<style scoped></style>
