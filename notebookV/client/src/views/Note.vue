<template>
    <div class="note-list">
        <div class="icon"><van-icon name="arrow-left" size="22px" @click="router.go(-1)"/></div>
        <ul>
            <li v-for="item in noteList" :key="item.id" @click="goNoteDetail(item.id)">
                <div class="img">
                    <img :src="item.head_img" alt="">
                </div>
                <div class="time">{{ item.m_time }}</div>
                <div class="title">{{ item.title }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from '../api/index';

// const res = await axios.get(`/findNoteListByType?note_type=${route.query.title}`)
const route = useRoute();
const router = useRouter()
const noteList = ref([])

axios.get('/findNoteListByType',{
    params: {
        note_type:route.query.title
    }
}).then(res=>{
    noteList.value = res.data
    console.log(noteList.value);
})

const goNoteDetail = (id) => {
    router.push({ path: '/noteDetail', query: {id} });
}


</script>

<style lang="less" scoped>
.note-list{
    .icon{
        margin: 10px;
    }
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 30px;
    }
    li{
        font-size: 0.37rem;
        .img{
            width: 100%;
            height: 4rem;
            overflow: hidden;
            border-radius: 30px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .title{
            margin-top: 5px;
        }
    }
}
</style>