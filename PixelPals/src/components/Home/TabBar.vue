<template>
  <van-tabbar
    v-model="active"
    class="shadow-black shadow-2xl opacity-90 backdrop-blur-sm bg-white/30"
  >
    <van-tabbar-item to="/assistant">
      <div class="tabbar-item flex-col justify-center items-center">
        <i class="iconfont icon-AIzhinengshiyanshi"></i>
      </div>
    </van-tabbar-item>
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/games">游戏库</van-tabbar-item>
    <van-tabbar-item icon="contact-o" to="/mine">我的</van-tabbar-item>
    <!-- <van-tabbar-item icon="contact-o" to="/assistant">AI</van-tabbar-item> -->
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const active = ref<number>(0);
onMounted(() => {
  const route = useRoute();
  if (route.fullPath == "/home") {
    active.value = 0;
  } else if (route.fullPath == "/games") {
    active.value = 1;
  } else if (route.fullPath == "/mine") {
    active.value = 2;
  } else if (route.fullPath == "/assistant") {
    active.value = 3;
  }
});
</script>

<style scoped type="text/css"></style>
