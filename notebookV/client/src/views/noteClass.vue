<template>
    <div class="note-class-wrapper">
        <div class="note-class" :class="{ hide: isShowMenu }">
            <header>
                <div @click="isShowMenu = true">
                    <van-icon name="wap-nav" />
                </div>
                <div>
                    <van-icon name="edit" @click="router.push('/notePublish')"/>
                    <van-icon name="like-o" />
                    <van-icon name="search" />
                </div>
            </header>

            <section>
                <div class="note-item" v-for="(item, index) in noteClassList" 
                :key="index" :style="{ backgroundColor: item.bgColor }" @click="goNoteList(item.title)">
                    <span class="title">{{ item.title }}</span>
                </div>
            </section>
        </div>

        <!-- menu -->
        <Menu class="menu" @hidden="handle" :class="{ show: isShowMenu }"></Menu>
         
    </div>
</template>

<script setup>
import Menu from '../components/menu.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()


const noteClassList = [
  { bgColor: '#f0aa84', title: '美食' },
  { bgColor: '#dcf189', title: '旅行' },
  { bgColor: '#e0c2f1', title: '恋爱' },
  { bgColor: '#c2ebf1', title: '学习' },
  { bgColor: '#949c9d', title: '吵架' }
]

const isShowMenu = ref(false)
const handle = (e) => {
    isShowMenu.value = false
}

// 跳转笔记
const goNoteList = (title) => {
    router.push({ path: '/note', query: {title} });
}


</script>

<style lang="less" scoped>
.note-class-wrapper{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .note-class{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 0.5866rem;
    box-sizing: border-box;
    overflow-y: scroll;
    transform: translateX(0%);
    transition: transform 0.3s;
    &.hide{
      transform: translateX(100%);
    }

    header{
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      align-items: center;
      margin: 10px 0;
      .van-icon{
        font-size: 24px;
        margin: 0 5px;
      }
    }
    section{
      width: 100%;
      .note-item{
        height: 3.2rem;
        border-radius: 0.3rem;
        margin-bottom: 0.64rem;
        box-shadow: 0 0 10px 2px #ccc;
        overflow: hidden;

        .title{
          display: block;
          margin-top: 0.5333rem;
          text-align: center;
          font-size: 0.5333rem;
          color: #fff;
        }
      }
    }
  }
  .menu{
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-100%);
    transition: all 0.3s;
    &.show{
      transform: translateX(0%);
    }
  }
}
</style>