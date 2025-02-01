import { defineStore } from "pinia";
import { ref } from "vue";

import type {
    TopBarItem,
    GameCard,
    menuFirst,
    menuSecond
} from "../types/game";

export const useGameStore = defineStore("game", () => {
    const topBarItems = ref<TopBarItem[]>([
        {
            title: "热门游戏",
            icon: "fire-o"
        },
        {
            title: "史低精选",
            icon: "gem-o"
        },
        {
            title: "厂商特惠",
            icon: "shop-o"
        },
        {
            title: "白嫖专区",
            icon: "gift-o"
        }
    ])
    const GameCards = ref<GameCard[]>([
        {
            img: "https://img2.baidu.com/it/u=1553821508,264280410&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800",
            title: "艾尔登法环",
            price: 10,
            desc: "开放世界"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        },
        {
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "原神",
            price: 0,
            desc: "子游戏"
        }
    ])
    const menuFirstBarState = ref<menuFirst[]>([
        {
            title: "全部",
            icon: "fire-o"
        },
        {
            title: "角色扮演",
            icon: "gem-o"
        },
        {
            title: "动作冒险",
            icon: "shop-o"
        },
        {
            title: "模拟经营",
            icon: "gift-o"
        },
        {
            title: "体育竞技",
            icon: "gift-o"
        }
    ])
    const menuSecondBarState = ref<menuSecond[]>([
        {
            title: "全部",
            icon: "fire-o"
        },
        {
            title: "角色扮演",
            icon: "gem-o"
        },
        {
            title: "动作冒险",
            icon: "shop-o"
        },
        {
            title: "模拟经营",
            icon: "gift-o"
        },
        {
            title: "体育竞技",
            icon: "gift-o"
        },
        {
            title: "棋牌桌游",
            icon: "gift-o"
        },
        {
            title: "策略类",
            icon: "gift-o"
        },
        {
            title: "策略类",
            icon: "gift-o"
        },
        {
            title: "策略类",
            icon: "gift-o"
        },
        {
            title: "策略类",
            icon: "gift-o"
        }

    ])
    return {
        topBarItems,
        GameCards,
        menuFirstBarState,
        menuSecondBarState
    }
})