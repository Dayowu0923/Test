<template>
  <div class="toast" ref="toast">
    <span>{{ msg }}</span>
    <button class="close-btn" @click="hideToast">×</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";

const totalShow = defineModel("totalShow", {
  type: Boolean,
  default: false,
});
const msg = defineModel("msg", {
  type: String,
  default: "",
});

// 使用 ref 來訪問 toast 元素
const toast = ref<HTMLElement | null>(null);
let toastTimeout: ReturnType<typeof setTimeout>;

// 監視 totalShow 的變化，當變為 true 時顯示 toast
watch(
  () => totalShow.value,
  (newVal) => {
    if (newVal && msg.value.trim() != "") {
      showToast();
    }
  }
);

// 顯示 toast 的邏輯
const showToast = () => {
  if (toast.value) {
    toast.value.classList.add("show");
  }

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(hideToast, 1500);
};

// 隱藏 toast 的邏輯
const hideToast = () => {
  totalShow.value = false; // 設置為 false，控制父組件的狀態
  if (toast.value) {
    toast.value.classList.remove("show");
  }
};
</script>
