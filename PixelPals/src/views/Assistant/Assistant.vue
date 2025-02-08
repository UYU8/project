<template>
  <div class="chat-container h-[calc(100vh-3rem)]" style="position: relative">
    <!-- 顶部 -->
    <header class="chat-title w-full flex justify-center">
      <div
        class="chat-header h-[calc(10vh)] w-full flex items-center justify-between bg-transparent px-4 border-b border-white rounded-xl"
      >
        <div class="talk">
          <van-icon name="chat-o text-black" size="1.5rem" />
        </div>
        <div class="title">
          <h2>AI 像素伙伴</h2>
        </div>
        <div class="avatar">
          <van-icon name="user-o text-black" size="1.5rem" />
        </div>
      </div>
    </header>
    <!-- 聊天区域 -->
    <div class="h-[calc(72vh)] overflow-y-auto mx-auto p-4 z-1">
      <div
        v-for="(item, index) in conversation"
        :key="index"
        class="chat-message"
      >
        <div v-if="item.question" class="chat-question">
          <div class="flex py-2">
            <div
              class="relative rounded-lg bg-violet-200 border border-gray-300 px-4 py-2 ml-auto mr-4 text-gray-700 max-w-56"
            >
              <div class="avatar absolute top-2 -right-7">
                <van-icon name="contact" size="1.5rem" color="#666666" />
              </div>
              {{ item.question }}
            </div>
          </div>
        </div>
        <div class="chat-answer">
          <div class="flex items-start py-2 pr-4">
            <van-icon name="contact" size="1.5rem" color="#666666" />
            <div
              class="rounded-lg bg-blue-500 px-4 py-2 ml-4 text-white relative"
            >
              <div class="avatar absolute top-1 -left-7"></div>
              {{ item.answer.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="chat_footer fixed bottom-12 w-full">
      <van-search
        class="el-input w-full"
        placeholder="游戏的一切，都在这里"
        text-color="black"
        type="text"
        show-action
        shape="round"
        background="transparent"
        v-model="question"
        @keyup.enter="askQuestion"
        v-show="!loading"
      >
        <template #action>
          <div class="text-white transform translate-y-1" @click="askQuestion">
            <van-icon name="guide-o" class="text-blue-500" size="1.25rem" />
          </div>
        </template>
      </van-search>
    </div>
    <div v-show="loading">
      <van-loading vertical class="text-black">
        <template #icon>
          <van-icon name="star-o" size="30" color="black" />
        </template>
        加载中...
      </van-loading>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const question = ref("");
    const conversation = reactive([]);
    const loading = ref(false);
    // 从 localStorage 恢复会话
    const restoreConversation = () => {
      const storedConversation = localStorage.getItem("conversation");
      if (storedConversation) {
        Object.assign(conversation, JSON.parse(storedConversation));
      }
    };

    // 发送消息到后端API
    const chatApi = async (message) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/chatai",
          message,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        return response.data;
      } catch (error) {
        console.warn(error);
        throw error;
      }
    };

    // 提交问题并获取回答
    const askQuestion = async () => {
      if (!question.value.trim()) {
        return;
      }

      conversation.push({
        question: question.value,
        answer: "等待回答...",
      });

      loading.value = true;

      try {
        const message = `请回答${question.value}`;
        const response = await chatApi({ message });

        conversation[conversation.length - 1].answer = response;
        localStorage.setItem("conversation", JSON.stringify(conversation));
      } catch (error) {
        console.warn(error);
      } finally {
        loading.value = false;
        question.value = "";
      }
    };

    // 在组件挂载时恢复对话记录
    // onMounted(() => {
    //   restoreConversation();
    // });

    return {
      question,
      conversation,
      loading,
      askQuestion,
    };
  },
};
</script>

<style scoped>
/* 在此处添加样式 */
</style>
