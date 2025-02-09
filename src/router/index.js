import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/home",
    name: "HomeLiving",
    component: () => import("../views/HomeLiving.vue"),
  },
  {
    path: "/accessories",
    name: "Accessories",
    component: () => import("../views/Accessories.vue"),
  },
  {
    path: "/stationery",
    name: "Stationery",
    component: () => import("../views/Stationery.vue"),
  },
  {
    path: "/sale",
    name: "Sale",
    component: () => import("../views/Sale.vue"),
  },
  {
    path: "/gift-card",
    name: "GiftCard",
    component: () => import("../views/GiftCard.vue"),
  },
  {
    path: "/shoppingcart",
    name: "Shoppingcart",
    component: () => import("../views/Shoppingcart.vue"),
  },
  {
    path: "/checkoutForm",
    name: "CheckoutForm",
    component: () => import("../views/CheckoutForm.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;