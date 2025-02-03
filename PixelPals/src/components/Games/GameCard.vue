<template>
  <div class="container px-6 h-full">
    <wc-waterfall gap="10" cols="2">
      <div v-for="item in items" :key="item.title" class="card rounded">
        <img v-lazy="item.img" class="w-full rounded" />
        <div class="font-bold antialiased font-sans text-sm">
          {{ item.title }}
        </div>
        <div class="bg-slate-100 inline-block">
          <span class="text-sm pr-2">￥{{ item.price }}</span>
        </div>
        <div class="text-xs">{{ item.desc }}</div>
      </div>
      <van-cell v-for="item in items" :key="item" />
    </wc-waterfall>
  </div>
</template>

<script setup lang="ts">
import type { GameCard } from "../../types/game";

//接口定义类型约束
interface Props {
  items: GameCard[];
}
//接收父组件传递的数据
defineProps<Props>();
</script>

<style scoped></style>
