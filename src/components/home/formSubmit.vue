<template>
  <section class="orderInfo wrap" data-index="7">
    <h3>填寫預定資料</h3>
    <div class="form-group">
      <label for="bookName">姓名</label>
      <div class="input-wrap">
        <input
          type="text"
          placeholder="請輸入姓名"
          id="bookName"
          name="bookName"
          autocomplete="off"
          v-model.trim="bookName"
        />
        <span>必填</span>
      </div>
    </div>
    <div class="form-group">
      <label for="bookPhone">電話</label>
      <div class="input-wrap">
        <input
          type="text"
          placeholder="請輸入電話"
          id="bookPhone"
          name="bookPhone"
          autocomplete="off"
          v-model.trim="bookPhone"
        />
        <span>必填</span>
      </div>
    </div>
    <div class="form-group">
      <label for="bookEmail">Email</label>
      <div class="input-wrap">
        <input
          type="text"
          placeholder="請輸入Email"
          v-model.trim="bookEmail"
          id="bookEmail"
          name="bookEmail"
          autocomplete="off"
        />
        <span>必填</span>
      </div>
    </div>
    <div class="form-group">
      <label for="bookAddress">寄送地址</label>
      <div class="input-wrap">
        <input
          type="text"
          placeholder="請輸入寄送地址"
          v-model="bookAddress"
          id="bookAddress"
          name.trim="bookAddress"
          autocomplete="off"
        /><span>必填</span>
      </div>
    </div>
    <div class="form-group">
      <label for="payMethod">交易方式</label>
      <n-select
        v-model:value="bookPayment"
        filterable
        placeholder="請選擇交易方式"
        :options="props.payOption"
      />
    </div>
    <div class="form-group">
      <button class="sendOrder-btn" @click="addForm">送出預定資料</button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { NSelect } from "naive-ui";

interface IStatus {
  payOption?: Array<any>;
}
const props = defineProps<IStatus>();
const bookName = defineModel("bookName", {
  type: String,
  default: "",
});

const bookPhone = defineModel("bookPhone", {
  type: String,
  default: "",
});

const bookEmail = defineModel("bookEmail", {
  type: String,
  default: "",
});

const bookAddress = defineModel("bookAddress", {
  type: String,
  default: "",
});

const bookPayment = defineModel("bookPayment", {
  type: String,
  default: "",
});

const emit = defineEmits(["addForm"]);

const addForm = () => {
  emit("addForm");
};
</script>
