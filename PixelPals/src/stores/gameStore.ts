import { defineStore } from "pinia";
// 关键数据要限制类型
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
            icon: "fire"
        },
        {
            title: "史低精选",
            icon: "gem"
        },
        {
            title: "厂商特惠",
            icon: "shop"
        },
        {
            title: "白嫖专区",
            icon: "gift"
        }
    ])
    const GameCards = ref<GameCard[]>([
        {
            type: "1",
            img: "https://img2.baidu.com/it/u=1553821508,264280410&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800",
            title: "艾尔登法环",
            price: 298,
            desc: "开放世界 奇幻"
        },
        {
            type: "1",
            img: "https://tse2-mm.cn.bing.net/th/id/OIP-C.dkF6fB_o_4SiGPARpP-1YgHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "荒野大镖客2：救赎",
            price: 279,
            desc: "剧情 角色扮演"
        },
        {
            type: "1",
            img: "https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/dda0c01ff745eab74b334ea6b2b5901c.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_2560%2ch_1440",
            title: "尼尔：机械纪元",
            price: 274,
            desc: "音乐 角色扮演"
        },
        {
            type: "1",
            img: "https://img.3dmgame.com/uploads/images/news/20190611/1560248942_783297.jpg",
            title: "歧路旅人",
            price: 379,
            desc: "JRPG 治愈" 
        },
        {
            type: "1",
            img: "https://img.3dmgame.com/uploads/allimg/170508/316-1F50QI302.jpg",
            title: "黑暗之魂3",
            price: 198,
            desc: "魂类 硬核"
        },
        {
            type: "1",
            img: "https://img.3dmgame.com/uploads/images/news/20190327/1553653842_389216.jpg",
            title: "只狼",
            price: 198,
            desc: "魂类 角色扮演"
        },
        {
            type: "1",
            img: "https://img.3dmgame.com/uploads/images/news/20240226/1708906792_549790.jpg",
            title: "绝地潜兵2",
            price: 198,
            desc: "团队 射击"
        },
        {
            type: "1",
            img: "https://img.3dmgame.com/uploads/images/news/20190924/1569308304_168641.jpg",
            title: "怪物猎人：世界",
            price: 148,
            desc: "冒险 多人合作"
        },
        {
            type: "1",
            img: "https://img.3dmgame.com/uploads/allimg/170603/316-1F603155216.jpg",
            title: "彩虹六号：围攻",
            price: 98,
            desc: "策略 射击"
        },
        {
            type: "1",
            img: "https://tse3-mm.cn.bing.net/th/id/OIP-C.zD2uQstEiW3rJtsX02vIKgHaEK?rs=1&pid=ImgDetMain",
            title: "永劫无间",
            price: 98,
            desc: "硬核 多人合作"
        },
        {
            type: "2",
            img: "https://img.3dmgame.com/uploads/allimg/170609/316-1F609153358.jpg",
            title: "塞尔达传说：旷野之息",
            price: 356,
            desc: "开放世界 角色扮演"
        },
        {
            type: "3",
            img: "https://img.3dmgame.com/uploads/allimg/170717/316-1FGGG244.jpg",
            title: "血源诅咒",
            price: 68,
            desc: "魂类 氛围"
        }

    ])
    const menuFirstBarState = ref<menuFirst[]>([
        {
            title: "全部",
            icon: "bag-o"
        },
        {
            title: "角色扮演",
            icon: "friends-o"
        },
        {
            title: "动作射击",
            icon: "aim"
        },
        {
            title: "模拟经营",
            icon: "cashier-o"
        },
        {
            title: "体育竞技",
            icon: "flag-o"
        }
    ])
    const menuSecondBarState = ref<menuSecond[]>([
        {
            title: "全部",
            icon: "bag-o"
        },
        {
            title: "角色扮演",
            icon: "friends-o"
        },
        {
            title: "动作射击",
            icon: "aim"
        },
        {
            title: "模拟经营",
            icon: "cashier-o"
        },
        {
            title: "体育竞技",
            icon: "flag-o"
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
            title: "开放世界",
            icon: "gift-o"
        },
        {
            title: "多人联机",
            icon: "gift-o"
        },
        {
            title: "沙盒建造",
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