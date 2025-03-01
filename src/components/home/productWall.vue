<template>
  <section class="shop-display wrap" data-index="5">
    <div class="w-2/12 flex flex-col" style="margin: 16px 0px !important">
      <n-select
        v-model:value="selectValue"
        filterable
        placeholder="請選擇類別"
        :options="props.selectOption"
      />
    </div>

    <ul class="cardWrap">
      <li class="card" v-for="(item, index) in filtetData">
        <span>新品</span>
        <img :src="item.images" alt="商品圖" />
        <div
          class="addCar-btn cursor-pointer"
          @click="addItem(item.id)"
          :data-id="item.id"
        >
          加入購物車
        </div>
        <p class="card-name">{{ item.title }}</p>
        <p>
          <del class="origin-price"
            >NT$${{ utility.thousandsSeparator(item.origin_price) }}</del
          >
        </p>
        <p class="price">NT$${{ utility.thousandsSeparator(item.price) }}</p>
      </li>
    </ul>
  </section>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { NSelect } from "naive-ui";
import { utility } from "@/utility";
interface IStatus {
  selectOption?: Array<any>;
  productList?: Array<any>;
}
const selectValue = ref("全部");
const props = defineProps<IStatus>();
const emit = defineEmits(["addItem"]);
const filtetData = computed(() => {
  var result = props.productList;
  if (selectValue.value === "全部") return result;
  else return result.filter((x) => x.category === selectValue.value);
});

const addItem = (id: any) => {
  emit("addItem", id);
};
</script>
