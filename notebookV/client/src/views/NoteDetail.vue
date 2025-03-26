<template>
    <div class="note-detail">
      <div class="icon"><van-icon name="arrow-left" size="22px" @click="router.go(-1)"/></div>
        <div class="note-img">
            <img :src="noteDetail.head_img">
        </div>
        <div class="note-content">
            <div class="tab">
                <span class="note-type">{{noteDetail.note_type}}</span>
                <span class="author">{{noteDetail.nickname}}</span>
            </div>
            <p class="title">{{noteDetail.title}}</p>
            <div class="content" v-html=" noteDetail.note_content "></div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
// import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from '../api/index';
import { useRouter } from 'vue-router';

const router = useRouter()

const route = useRoute();
// const router = useRouter()
const noteDetail = ref({})

axios.get('/findNoteDetail',{
    params: {
        id:route.query.id
    }
}).then(res=>{
    noteDetail.value = res.data[0]
    console.log(noteDetail.value);
})
</script>

<style lang="less" scoped>
.note-detail {
  .icon{
        margin: 10px;
    }
  .note-img {
    width: 100%;
    height: 5rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .note-content {
    padding: 0.667rem;

    .tab {
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;

      span {
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }

    .title {
      margin: .5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }

    .content {
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }
}
</style>