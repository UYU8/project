<template>
    <header>
        <Header />
    </header>
    <main>
        <SuggestedPostsCard :items="SuggestedPosts" />

        <div class="p-2.5 flex items-end ">
            <div class="text-l font-bold">
                热门话题
                <van-icon name="fire" color="red"/>
            </div>
            <div class="ml-auto text-xs">
                全部话题
                <van-icon name="arrow" class="ml-auto mr-1"/>
            </div>
        </div>

        <div class="p-2.5"> 
        <HotTopicsContent :items="HotTopics" />
        </div>
    </main>
    <NewsFeedCard :items="NewsFeeds"/>
    
</template>

<script setup lang="ts">
import Header from '@/components/Home/Header.vue';
import SuggestedPostsCard from '@/components/Home/SuggestedPosts.vue'
import HotTopicsContent from '@/components/Home/HotTopics.vue'
import NewsFeedCard from '@/components/Home/NewsFeed.vue'

// pinia 数据管理 + 组件显式
import { toRefs } from "vue";
import { useHomeStore } from "../../stores/homeStore";

const homeStore = useHomeStore();
const { SuggestedPosts, HotTopics, NewsFeeds } = toRefs(homeStore);

</script>

<style scoped>

</style>