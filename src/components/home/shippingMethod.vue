<template>
  <section class="transport" data-index="4">
    <h3 class="section-title">運送方式</h3>
    <ul class="transport-intro wrap">
      <li>
        <div class="transport-icon">
          <n-icon size="50">
            <AddShoppingCartFilled />
          </n-icon>
        </div>
        <h4>STEP.1</h4>
        <p>選購商品</p>
      </li>
      <li>
        <div class="transport-icon">
          <n-icon size="50">
            <FormatListBulletedFilled />
          </n-icon>
        </div>
        <h4>STEP.2</h4>
        <p>填寫預定資料</p>
      </li>
      <li>
        <div class="transport-icon">
          <n-icon size="50">
            <CheckOutlined />
          </n-icon>
        </div>
        <h4>STEP.3</h4>
        <p>預定成功</p>
      </li>
      <li>
        <div class="transport-icon">
          <n-icon size="50">
            <EmailOutlined />
          </n-icon>
        </div>
        <h4>STEP.4</h4>
        <p>Email付款資訊</p>
      </li>
    </ul>
  </section>
</template>
<script lang="ts" setup>
import { NIcon } from "naive-ui";

import {
  EmailOutlined,
  FormatListBulletedFilled,
  AddShoppingCartFilled,
  CheckOutlined,
} from "@vicons/material";
</script>
