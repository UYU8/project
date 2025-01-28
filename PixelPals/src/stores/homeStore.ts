import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
import type {
    SuggestedPost,
    HotTopic,
    NewsFeed,
    NewsFeedList
} from "../types/home.ts";

export const useHomeStore = defineStore('home', () => {
    const SuggestedPosts = ref<SuggestedPost[]>([
        {
            describe:'艾尔登法环宣布新DLC',
            img:'https://img2.baidu.com/it/u=1553821508,264280410&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800'
        },
        {
            describe:'deepseek本地部署教程',
            img:'https://imgheybox.max-c.com/bbs/2025/01/28/f32e71ab57aabc9d089f1428f69fffce/thumb.jpeg?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image'
        },
        {
            describe:'苹果发布iOS 18.3正式版：默认开启苹果智能！',
            img:'https://imgheybox.max-c.com/web/2025/01/27/823ad5319277f6a339e978bd5d9ed804/thumb.jpeg?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image'
        },
        {
            describe:'育碧的前世今生',
            img:'https://imgheybox.max-c.com/bbs/2025/01/28/100cd70b9d899e26b5b9ccda88e55d8d/thumb.jfif?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image'
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
        {
            title:'伙伴杂谈'
        },
    ])
    const NewsFeedLists = ref<NewsFeedList[]>([
        {
            id:1,
            title:'“杀出年度重围”的《战神4》讲了一个怎样的故事？',
            img:'https://imgheybox1.max-c.com/bbs/2025/01/27/3f54a6b6b207d18f1e12960c0c9f656f/thumb.jpeg?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image',
            time:'6小时前·PC游戏',
            comment:'153'
        },
        {
            id:1,
            title:'黑魂三部曲开始新春大促！',
            img:'https://img.3dmgame.com/uploads/allimg/160328/156-16032PQ518.jpg',
            time:'8小时前·PC游戏',
            comment:'100'
        },
        {
            id:2,
            title:'剑星官宣PC版将于明年发布',
            img:'https://imgheybox1.max-c.com/bbs/2025/01/17/d5046d21acd6df00a545647803485ff5/thumb.jpeg?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image',
            time:'10小时前·主机游戏',
            comment:'246'
        },
        {
            id:3,
            title:'8小时主线，《崩坏：星穹铁道》番剧化正在成为现实',
            img:'https://imgheybox.max-c.com/bbs/2025/01/25/f9bec80f5284961ba52d4d31beb834f7/thumb.png?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image',
            time:'12小时前·手机游戏',
            comment:'78'
        },
        {
            id:4,
            title:'[GitHub#6]Windows 10/11超强的小组件插件',
            img:'https://imgheybox1.max-c.com/web/bbs/2025/01/25/edadccf6c0d77381a2cfa4fd4477fd15/thumb.jpeg?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image',
            time:'1天前·数码硬件',
            comment:'132'
        },
        {
            id:5,
            title:'DeepSeek演都不演了，又发布视觉多模态模型janus Pro！',
            img:'https://imgheybox.max-c.com/bbs/2025/01/05/7e3506e0df37d585c30178c721303823/thumb.png?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image',
            time:'1天前·百科知识',
            comment:'288'
        },
        {
            id:6,
            title:'哪里想练点哪里，专业的健身跟练教程——肌肉维基',
            img:'https://imgheybox.max-c.com/web/bbs/2025/01/26/7c480a93887fb4cc99bbc846bdfc4534/thumb.png?imageMogr2/format/webp/quality/75/auto-orient/ignore-error/1&uri_type=image',
            time:'1天前·伙伴杂谈',
            comment:'98'
        }
    ])
    return {
        SuggestedPosts,
        HotTopics,
        NewsFeeds,
        NewsFeedLists
    }
})