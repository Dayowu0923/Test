import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
    RouteRecordRaw,
  } from "vue-router";
  import { ref } from 'vue';


  const routes: Array<RouteRecordRaw> = [
    {
      // 預設路徑，如果亂打就回去 '/'
      path: "/:catchAll(.*)",
      redirect: "/",
    },
    {
      path: "/",
      name: "login",
      component: () => import("../views/home/index.vue"),
      meta: {
        title: "WOWORoom 家具",
      },
    }

  ];
  
  const router = createRouter({
    // 如果部屬使用netcore的靜態資源，回傳指定index.html資源就可以用這個 -> /main/IDX_01
    // history: createWebHistory(process.env.BASE_URL),
    // 部屬時如果無法讓所有回應指向/index.html 就要用這個 -> /#/main/IDX_01
    history: createWebHashHistory(),
    routes,
  });
  
  // 更改網站名稱(title)
  router.beforeEach((to, from, next) => {
      next();
   
  });
  
  export { router };