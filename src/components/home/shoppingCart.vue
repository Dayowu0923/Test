<template>
  <section class="shopCar" data-index="6">
    <h3>我的購物車</h3>
    <div class="overflowWrap">
      <table class="shopCar-table">
        <thead>
          <tr>
            <th width="40%">商品</th>
            <th width="15%">單價</th>
            <th width="15%">數量</th>
            <th width="15%">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-if="props.shoppingCartData.length > 0"
            v-for="(item, index) in props.shoppingCartData"
          >
            <td>
              <div class="cardItem-title">
                <img :src="item.product.images" alt="" />
                <p>{{ item.product.title }}</p>
              </div>
            </td>
            <td>NT${{ item.product.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>NT${{ item.product.price * item.quantity }}</td>
            <td class="del-carBtn">
              <n-icon
                size="40"
                class="cursor-pointer"
                @click="delItem(item.id)"
              >
                <CloseOutlined />
              </n-icon>
            </td>
          </tr>
          <tr v-else>
            <td>暫時還沒有商品,再去逛逛吧</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div
                v-if="props.shoppingCartData.length > 0"
                class="delAll-btn cursor-pointer"
                @click="removeAll"
              >
                刪除所有品項
              </div>
            </td>
            <td></td>
            <td></td>
            <td>總金額</td>
            <td class="total-price">NT${{ totalPrice }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { NIcon } from "naive-ui";
import { CloseOutlined } from "@vicons/material";
interface IStatus {
  shoppingCartData?: Array<any>;
}
const selectValue = ref("全部");
const props = defineProps<IStatus>();
const emit = defineEmits(["removeAll", "delCarItem"]);

const removeAll = () => {
  emit("removeAll");
};

const delItem = (id: any) => {
  emit("delCarItem", id);
};

const totalPrice = computed(() => {
  if (props.shoppingCartData.length === 0) return 0;
  else {
    var result = props.shoppingCartData.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.product.price * currentItem.quantity;
    }, 0);
    return result;
  }
});
</script>
