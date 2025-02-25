<template>
  <!-- 首页 -->
  <header class="sticky top-0 z-50">
    <Header />
  </header>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <main>
      <!-- 轮播图 -->
      <SuggestedPostsCard :items="SuggestedPosts" />

      <div class="p-2.5 flex items-end">
        <div class="text-l font-bold">
          热门话题
          <van-icon name="fire" color="red" />
        </div>
        <div class="ml-auto text-xs">
          全部话题
          <van-icon name="arrow" class="ml-auto mr-1" />
        </div>
      </div>

      <div class="p-2.5">
        <!-- 热门话题 -->
        <HotTopicsContent :items="HotTopics" />
      </div>
    </main>
    <section>
      <!-- 动态资讯 -->
      <NewsFeedCard :items="NewsFeeds" />
    </section>
  </van-pull-refresh>
</template>

<script setup lang="ts">
import Header from "@/components/Home/Header.vue";
import SuggestedPostsCard from "@/components/Home/SuggestedPosts.vue";
import HotTopicsContent from "@/components/Home/HotTopics.vue";
import NewsFeedCard from "@/components/Home/NewsFeed.vue";

// pinia 数据管理 + 组件显式
import { ref } from "vue";
import { toRefs } from "vue";
import { useHomeStore } from "../../stores/homeStore";

const homeStore = useHomeStore();
const { SuggestedPosts, HotTopics, NewsFeeds } = toRefs(homeStore);

const loading = ref(false);

// 下拉刷新
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

<style scoped></style>
