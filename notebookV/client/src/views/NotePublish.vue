<template>
    <div class="note-publish">
        <div class="icon"><van-icon name="arrow-left" size="22px" @click="router.go(-1)"/></div>
        <div class="editor">
            <QuillEditor theme="snow" 
            v-model:content="state.content"
            placeholder="请输入笔记内容"
            content-type="html"/>
        </div>
        <div class="note-wrap">
            <div class="note-cell">
                <van-field v-model="state.title" label="标题" placeholder="请输入标题" />
            </div>
            <div class="note-cell">
                <van-field v-model="value" label="图片上传">
                    <template #input>
                        <van-uploader v-model="state.img" :after-read="afterRead" max-count="1" />
                    </template>
                </van-field>
            </div>
            <div class="note-cell" >
                <div class="sort" @click="showPicker= true">
                    <span>分类</span>
                    <span>{{ state.note_type }}<van-icon name="arrow" /></span>
                    
                </div>
            </div>
        </div>

        <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
        />
        </van-popup>

        <div class="btn" @click="publish">
            <van-button block type="primary">主要按钮</van-button>
        </div>
        
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from '../api/index';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

const router = useRouter();



const state = reactive({
    content: '',
    title:'',
    img:[],
    note_type:''
})

const afterRead = (file) => {
    console.log(file)
}

const showPicker = ref();

const columns = [
      { text: '美食', value: '美食' },
      { text: '旅行', value: '旅行' },
      { text: '恋爱', value: '恋爱' },
      { text: '学习', value: '学习' },
      { text: '吵架', value: '吵架' },
    ];

const onConfirm = ({selectedValues}) => {
    // console.log(selectedValues);
    state.note_type = selectedValues[0]
    showPicker.value = false;
}

const publish = async() =>{
    const res = await axios.post('/note-publish',{
        title:state.title,
        note_content:state.content,
        note_type:state.note_type,
        head_img:state.img.length ? state.img[0].content : ''
    })
    console.log(res);
    if(res.code === 800){
        router.push('/noteClass')
        showToast('您的笔记发布成功辣！');
    }else{
        showToast(res.msg);
    }
}


</script>

<style lang="less" scoped>
.note-publish{

    .icon{
        margin: 10px;
    }
    min-height: 100vh;
    :deep(.ql-container){
        height: 350px;
    }

    .note-cell{
        border-bottom: 1px solid #968f8f;
        .sort{
            display: flex;
            justify-content: space-between;
            line-height: 3;
            padding: 5px 16px;
            color: #323233;
        }
    }
    .btn{
        // :deep(.van-button){
        //     width: 80%;
        //     margin: 0 auto;
        //     margin-top: 2rem;
        // }
        width: 80%;
            margin: 0 auto;
            margin-top: 2rem;
    }
}
</style>