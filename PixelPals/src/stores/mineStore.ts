import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
import type {
    mineData,
    mineItem,
    mineInfo
} from "../types/mine.ts";

export const useMineStore = defineStore('mine', () => {
    const mineDatas = ref<mineData[]>([
        {
            details:'23',
            content:'关注'
        },
        {
            details:'120',
            content:'粉丝'
        },
        {
            details:'46',
            content:'收藏'
        },
        {
            details:'20',
            content:'历史浏览'
        }
    ])
    const mineItems = ref<mineItem[]>([
        {
            icon:'apps-o',
            desc:'游戏库'
        },
        {
            icon:'shop',
            desc:'订单'
        },
        {
            icon:'cart',
            desc:'购物车'
        },
        {
            icon:'award',
            desc:'任务中心'
        },
        {
            icon:'lock',
            desc:'账号安全'
        },
        {
            icon:'service',
            desc:'联系客服'
        },
        {
            icon:'setting',
            desc:'设置'
        },
        {
            icon:'live',
            desc:'我的配置'
        }
    ])
    const mineInfos = ref<mineInfo[]>([
        {
            name:'漩渦鳴人',
            desc:'落叶捎来讯息'
        }
    ])

    return {
        mineDatas,
        mineItems,
        mineInfos
    }
})