<template>
  <ul class="sideNav">
    <li
      v-for="(item, index) in props.navSideOption"
      data-index="3"
      @click="sideNavTo(item.id)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>
<script lang="ts" setup>
interface IStatus {
  navSideOption?: Array<any>;
}
let scrollHeight = document.documentElement.scrollHeight;

const props = defineProps<IStatus>();
//--側邊導航欄--//

const sideNavTo = (id: any) => {
  let index = id;
  let targetBlock;
  if (index != 0) {
    targetBlock = document.querySelector(`section[data-index='${index}']`);
  } else {
    targetBlock = document.querySelector(".topBar");
  }
  scrollYAnimate(window, targetBlock.offsetTop, null);
};

//側邊導航欄-滑動動畫
function scrollYAnimate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(() => {
    let step = (target - obj.pageYOffset) / 10;
    step = step < 0 ? Math.floor(step) : Math.ceil(step);
    window.scroll(0, obj.pageYOffset + step);

    if (Math.abs(obj.pageYOffset - target) <= 0.5) {
      clearInterval(obj.timer);
      callback && callback();
    }
  }, 12);
}
</script>
