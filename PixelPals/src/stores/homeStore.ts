import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
import type {
    SuggestedPost,
    HotTopic,
    NewsFeed
} from "../types/home.ts";

export const useHomeStore = defineStore('home', () => {
    const SuggestedPosts = ref<SuggestedPost[]>([
        {
            describe:'xxx',
            img:'https://img2.baidu.com/it/u=1553821508,264280410&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800'
        },
        {
            describe:'xxx',
            img:'https://img2.baidu.com/it/u=1553821508,264280410&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800'
        },
        {
            describe:'xxx',
            img:'https://img2.baidu.com/it/u=1553821508,264280410&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800'
        },
        {
            describe:'xxx',
            img:'https://img2.baidu.com/it/u=1553821508,264280410&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800'
        }
    ])
    const HotTopics = ref<HotTopic[]>([
        {
            content:'RTX5090发售之际，聊聊你的显卡。'
        },
        {
            content:'暴雪全家桶将于今夏回归对此你有哪些期待呢？'
        },
        {
            content:'你眼中值得推荐的三国题材作品是？'
        },
        {
            content:'哪些游戏是你近期最期待迎来史低折扣的游戏呢？'
        }
])
    const NewsFeeds = ref<NewsFeed[]>([ 
        {
            title:'全部'
        },
        {
            title:'热榜'
        },
        {
            title:'PC游戏'
        },
        {
            title:'主机游戏'
        },
        {
            title:'手机游戏'
        },
        {
            title:'数码硬件'
        },
        {
            title:'百科知识'
        },
    ])
    return {
        SuggestedPosts,
        HotTopics,
        NewsFeeds
    }
})