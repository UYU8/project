<template>
  <van-tabs
    type="line"
    v-model:active="active"
    swipeable
    animated
    sticky
    offset-top="70"
  >
    <van-tab v-for="(item, index) in items" :key="index" class="mb-10">
      <template #title>{{ item.title }}</template>
      <div v-for="contentitem in getFilteredItems(index)" :key="contentitem.id">
        <div class="flex items-center justify-between">
          <!-- 左侧内容区域 -->
          <div
            class="pl-1 w-[calc(100%-160px)] max-w-[calc(100%-160px)] flex-shrink-0 h-20"
          >
            <!-- 标题部分 -->
            <div
              class="pr-1 mb-2 font-sans subpixel-antialiased text-base font-bold line-clamp-2 h-12 overflow-hidden"
            >
              {{ contentitem.title }}
            </div>
            <!-- 时间和评论部分 -->
            <div class="flex items-center text-sm h-8 text-slate-500">
              <div>{{ contentitem.time }}</div>
              <div class="ml-auto flex items-center mr-2 text-slate-600">
                <van-icon name="more-o" />
                <span class="ml-1">{{ contentitem.comment }}</span>
              </div>
            </div>
          </div>

          <!-- 图片盒子 -->
          <div class="w-40 h-20.5 flex items-center mr-2">
            <van-image
              :src="contentitem.img"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <van-divider />
      </div>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import type { NewsFeed, NewsFeedList } from "../../types/home.ts";
import { ref, toRefs } from "vue";
import { useHomeStore } from "../../stores/homeStore";

const active = ref(0);
const homeStore = useHomeStore();
const { NewsFeedLists } = toRefs(homeStore);

//接口定义类型约束
interface Props {
  items: NewsFeed[];
}
//接收父组件传递的数据
defineProps<Props>();

// 确定函数返回值的类型为一个NewsFeedList数组
const getFilteredItems = (id: number): NewsFeedList[] => {
  if (id === 0) {
    // 如果 id 为 0，返回所有数据
    return NewsFeedLists.value;
  } else {
    // 否则，返回与当前 id 匹配的数据
    return NewsFeedLists.value.filter((item) => item.id === id);
  }
};
</script>

<style lang="scss" scoped></style>
