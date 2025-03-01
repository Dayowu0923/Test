<template>
  <section class="commodityCompare" data-index="2">
    <div class="wrap overflowWrap">
      <h3 class="section-title">家具比較</h3>
      <table class="compareTable">
        <thead>
          <tr>
            <th></th>
            <th>窩窩系統模組家具</th>
            <th class="textMuted">組合式家具</th>
            <th class="textMuted">實木家具</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>可單人自行組裝</td>
            <td class="align-middle text-purple-500">
              <n-icon size="25" class="mt-4">
                <CheckmarkSharp />
              </n-icon>
            </td>
            <td class="textMuted">不一定</td>
            <td></td>
          </tr>
          <tr>
            <td>可多次重複拆裝</td>
            <td class="align-middle text-purple-500">
              <n-icon size="25" class="mt-4">
                <CheckmarkSharp />
              </n-icon>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>床墊規格彈性大</td>
            <td class="align-middle text-purple-500">
              <n-icon size="25" class="mt-4">
                <CheckmarkSharp />
              </n-icon>
            </td>
            <td class="textMuted">不一定</td>
            <td class="textMuted">不一定</td>
          </tr>
          <tr>
            <td>材質可長久使用</td>
            <td class="align-middle text-purple-500">
              <n-icon size="25" class="mt-4">
                <CheckmarkSharp />
              </n-icon>
            </td>
            <td></td>
            <td class="align-middle text-purple-500">
              <n-icon size="25" class="mt-4">
                <CheckmarkSharp />
              </n-icon>
            </td>
          </tr>
          <tr>
            <td>小可車即可搬運</td>
            <td class="align-middle text-purple-500">
              <n-icon size="25" class="mt-4">
                <CheckmarkSharp />
              </n-icon>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { NIcon } from "naive-ui";
import { CheckmarkSharp } from "@vicons/ionicons5";
</script>
