<template>
  <!-- Header -->
  <topLayout></topLayout>
  <!-- 輪播banner -->
  <banner></banner>
  <!-- 家具比較 -->
  <compare></compare>
  <!-- 評論推薦 -->
  <comment></comment>
  <!-- 運送方式 -->
  <shippingMethod></shippingMethod>
  <!-- 商品牆 -->
  <productWall
    :productList="productData"
    :selectOption="option"
    @addItem="addItemToShoppingCart"
  ></productWall>
  <!-- 購物車 -->
  <shoppingCart
    @removeAll="removeAllEvent"
    @delCarItem="delCarItemEvent"
    :shoppingCartData="shoppingCartData"
  ></shoppingCart>
  <!-- 表單 -->
  <formSubmit
    v-model:bookName="bookName"
    v-model:bookPhone="bookPhone"
    v-model:bookEmail="bookEmail"
    v-model:bookAddress="bookAddress"
    v-model:bookPayment="bookPayment"
    :payOption="payOption"
    @addForm="addFormEvent"
  ></formSubmit>
  <!-- 側邊導航欄 -->
  <sideNav :navSideOption="navSideOption"></sideNav>
  <!-- Toast 提示訊息 -->
  <toast v-model:totalShow="totalShow" v-model:msg="msg"></toast>
  <!-- Footer -->
  <footerLayout></footerLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import topLayout from "@/components/topLayout.vue";
import footerLayout from "@/components/footerLayout.vue";
import shippingMethod from "@/components/home/shippingMethod.vue";
import banner from "@/components/home/banner.vue";
import comment from "@/components/home/comment.vue";
import compare from "@/components/home/compare.vue";
import productWall from "@/components/home/productWall.vue";
import shoppingCart from "@/components/home/shoppingCart.vue";
import sideNav from "@/components/home/sideNav.vue";
import toast from "@/components/toast.vue";
import formSubmit from "@/components/home/formSubmit.vue";
import { api } from "@/api";
import { utility } from "@/utility";
onMounted(async () => {
  await getProductList();
  await getCarList();
});

const totalShow = ref(false);
const msg = ref("");

const bookName = ref("");
const bookPhone = ref("");
const bookEmail = ref("");
const bookAddress = ref("");
const bookPayment = ref("1");

const option = ref([
  {
    value: "全部",
    label: "全部",
  },
  {
    value: "床架",
    label: "床架",
  },
  {
    value: "收納",
    label: "收納",
  },
  {
    value: "窗簾",
    label: "窗簾",
  },
]);

const navSideOption = ref([
  {
    id: 1,
    label: "好評推薦",
  },
  {
    id: 5,
    label: "選購商品",
  },
  {
    id: 6,
    label: "購物車",
  },
  {
    id: 0,
    label: "返回頂部",
  },
]);

const payOption = ref([
  {
    value: "1",
    label: "ATM",
  },
  {
    value: "2",
    label: "信用卡",
  },
  {
    value: "3",
    label: "超商付款",
  },
]);

interface Data {
  productId: string | number;
  quantity: number;
}

interface Body {
  data: Data;
}

const productData = ref([]);
const shoppingCartData = ref([]);
//--取得所有商品--//
const getProductList = async () => {
  var res = await api.getProductList();
  productData.value = res.data.products;
};
//--取得購物車清單--//
const getCarList = async () => {
  var res = await api.getCarList();
  shoppingCartData.value = res.data.carts;
};

//--購物車-加入--//
const addItemToShoppingCart = async (id: any) => {
  let num = 1;
  var res = shoppingCartData.value.find((x) => x.product.id === id);
  if (res !== undefined) {
    num = res.quantity + 1;
  }
  let body: Body = {
    data: {
      productId: id,
      quantity: num,
    },
  };
  await api.postCarList(body);
  await getCarList();
  msg.value = "成功加入購物車";
  totalShow.value = true;
};

//--清除購物車--//
const removeAllEvent = async () => {
  await api.deleteCarList();
  await getCarList();
  msg.value = "成功清空購物車";
  totalShow.value = true;
};

const delCarItemEvent = async (id: any) => {
  await api.deleteOneItem(id);
  await getCarList();
  msg.value = "成功刪除訂單";
  totalShow.value = true;
};

const addFormEvent = () => {
  const orderInfo = {
    name: bookName.value,
    phone: bookPhone.value,
    email: bookEmail.value,
    address: bookAddress.value,
    payment: bookPayment.value,
  };
  //回傳0表示驗證通過
  let errMsg = verify(orderInfo, shoppingCartData.value);
  if (errMsg) {
    msg.value = errMsg.toString();
    totalShow.value = true;
  } else {
    sendOrder(orderInfo);
  }
};

//驗證表單
const verify = ({ name, phone, email, address }, carData) => {
  // 檢查購物車是否有商品
  if (carData.length === 0) return "購物車內沒有商品";
  // 檢查欄位是否空白
  if (!name || !phone || !email || !address) return "請填寫完整資料";
  // 驗證手機格式
  if (!utility.isValidPhone(phone)) return "手機格式有誤喔";
  // 驗證email格式
  if (!utility.isValidEmail(email)) return "email格式有誤喔";
  // 驗證地址格式
  if (!utility.isValidAddress(address)) return "地址格式有誤喔";

  return 0;
};

//送出訂單
const sendOrder = async ({ phone, ...otherInfo }) => {
  otherInfo.tel = phone;
  const postData = {
    data: {
      user: otherInfo,
    },
  };
  await api.sendOrder(postData);
  reSetForm();
  msg.value = "訂單建立成功";
  totalShow.value = true;
  await getCarList();
};

const reSetForm = () => {
  bookName.value = "";
  bookPhone.value = "";
  bookEmail.value = "";
  bookAddress.value = "";
  bookPayment.value = "1";
};
</script>
