import { createRouter, createWebHashHistory } from "vue-router";

import HomeLiving from "../views/HomeLiving.vue";
import Index from "../views/Index.vue";
import Sale from "../views/Sale.vue";
import GiftCard from "../views/GiftCard.vue";
import Accessories from "../views/Accessories.vue";
import Stationery from "../views/Stationery.vue";
import Shoppingcart from "../views/Shoppingcart.vue";

const routes = [
  {
    path: "/",
    component: () => Index,
  },
  {
    path: "/home",
    component: () => HomeLiving,
  },
  {
    path: "/accessories",
    component: () => Accessories,
  },
  {
    path: "/stationery",
    component: () => Stationery,
  },
  {
    path: "/sale",
    component: () => Sale,
  },
  {
    path: "/gift-card",
    component: () => GiftCard,
  },
  {
    path: "/shoppingcart",
    component: () => Shoppingcart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
