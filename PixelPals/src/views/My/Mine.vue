<template>
  <!-- 背景 -->
  <div
    class="minePage container h-[11rem] relative shadow-md bg-[url('https://tse2-mm.cn.bing.net/th/id/OIP-C.nKYlEn2Ri7tRl3jIKd9gKwHaDd?rs=1&pid=ImgDetMain')] bg-cover bg-center"
  >
    <!-- 头像 -->
    <div
      class="avatar flex absolute top-10 left-5 transform translate-y-[3rem] items-center"
    >
      <img
        src="https://www.keaitupian.cn/cjpic/frombd/2/253/4018457537/689902982.jpg"
        alt=""
        class="rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400"
      />
      <div v-for="item in mineInfos" class="text-container ml-2">
        <div class="username text-lg font-bold text-gray-800">
          {{ item.name }}
        </div>
        <div class="subtitle text-base text-gray-600">{{ item.desc }}</div>
      </div>
    </div>
  </div>

  <main class="flex items-center mt-6">
    <header
      class="w-[calc(100vw-2rem)] min-h-20 bg-white rounded-2xl p-2 border shadow-md self-center m-auto mt-2"
    >
      <section class="topbar flex justify-space-between grid grid-cols-4 mb-3">
        <div
          class="topbar-item flex flex-col items-center mt-5"
          v-for="item in mineDatas"
          :key="item.details"
        >
          <div class="num font-bold text-2xl">{{ item.details }}</div>
          <span class="text-xs text-slate-500">{{ item.content }}</span>
        </div>
      </section>
    </header>
  </main>
  <main class="flex items-center mt-5">
    <header
      class="w-[calc(100vw-2rem)] min-h-20 bg-white rounded-lg shadow-lg border p-2 self-center m-auto"
    >
      <section class="topbar flex justify-space-between grid grid-cols-4 mb-3">
        <div
          class="topbar-item flex flex-col items-center mt-5"
          v-for="item in mineItems"
          :key="item.index"
        >
          <div class="num font-bold text-2xl">
            <van-icon :name="item.icon" size="1.5rem"></van-icon>
          </div>
          <span class="text-xs">{{ item.desc }}</span>
        </div>
      </section>
    </header>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { toRefs } from "vue";
import { useMineStore } from "../../stores/mineStore";

const mineStore = useMineStore();
const { mineDatas, mineItems, mineInfos } = toRefs(mineStore);
</script>

<style lang="scss" scoped></style>
