<template>
  <header>
    <div class="flex justify-between items-center">
      <div @click="showPicker = true">
        <span class="place ml-4 font-bold">{{ fieldValue }}游戏</span>
        <van-icon name="arrow-down" />
      </div>
      <nav class="flex items-center">
        <van-search shape="round" placeholder="请搜索游戏" />
        <van-icon name="cart-o" dot size="1.5rem" class="right-element mr-2" />
      </nav>
    </div>
    <van-popup
      v-model:show="showPicker"
      destroy-on-close
      round
      position="bottom"
    >
      <van-picker
        :model-value="pickerValue"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </header>
  <main>
    <header
      class="min-h-18 rounded-2xl p-2 shadow-md mx-4 my-4 border bg-white bg-opacity-80"
    >
      <section class="topbar flex justify-around my-[0.5rem]">
        <div
          class="topbar-item flex flex-col items-center"
          v-for="item in topBarItems"
          :key="item.title"
        >
          <div class="topbar-item__icon">
            <van-icon :name="item.icon" size="2rem" />
          </div>
          <div class="topbar-item__text text-sm font-bold">
            {{ item.title }}
          </div>
        </div>
      </section>
      <section class="flex border-3 border-black">
        <swiper
          class="swiper"
          :modules="modules"
          :auto-height="true"
          :space-between="20"
          :pagination="{ clickable: true }"
        >
          <swiper-slide class="slide pb-8">
            <menu class="first-page">
              <section
                class="topbar flex grid grid-cols-5 gap-5 items-center mt-3 mx-[19px]"
              >
                <div
                  class="topbar-item flex flex-col items-center whitespace-nowrap"
                  v-for="item in menuFirstBarState"
                  :key="item.title"
                >
                  <div class="topbar-item__icon">
                    <van-icon :name="item.icon" size="1.5rem"></van-icon>
                  </div>
                  <div class="topbar-item__text text-xs">{{ item.title }}</div>
                </div>
              </section>
            </menu>
          </swiper-slide>
          <swiper-slide class="slide pb-8">
            <menu class="second-page">
              <section
                class="topbar flex grid grid-cols-5 gap-5 items-center my-3 mx-[19px]"
              >
                <div
                  class="topbar-item flex flex-col items-center whitespace-nowrap"
                  v-for="item in menuSecondBarState"
                  :key="item.title"
                >
                  <div class="topbar-item__icon">
                    <van-icon :name="item.icon" size="1.5rem"></van-icon>
                  </div>
                  <div class="topbar-item__text text-xs">{{ item.title }}</div>
                </div>
              </section>
            </menu>
          </swiper-slide>
        </swiper>
      </section>
    </header>
    <section>
      <div class="flex justify-between items-center px-6 text-sm mb-4">
        <h2 class="title font-bold text-lg">为您推荐</h2>
      </div>
      <GameCard :items="filteredGameCards" class="mb-12" />
      <van-back-top right="5vw" bottom="8vh" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, toRefs, computed } from "vue";
import { useGameStore } from "../../stores/gameStore";
import GameCard from "../../components/Games/GameCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
SwiperCore.use([Pagination]);

const modules = [Pagination];
const gameStore = useGameStore();
const { topBarItems, GameCards, menuFirstBarState, menuSecondBarState } =
  toRefs(gameStore);
const columns = [
  { text: "PC", value: "1" },
  { text: "Switch", value: "2" },
  { text: "PSN", value: "3" },
];
const fieldValue = ref(columns[0].text);
const showPicker = ref(false);
const pickerValue = ref<number[]>([]);
const action = ref("1");
const onConfirm = ({ selectedValues, selectedOptions }) => {
  showPicker.value = false;
  pickerValue.value = selectedValues;
  fieldValue.value = selectedOptions[0].text;

  action.value = selectedOptions[0].value;
};
const filteredGameCards = computed(() => {
  return GameCards.value.filter((card) => card.type === action.value[0]);
});
</script>

<style scoped></style>
