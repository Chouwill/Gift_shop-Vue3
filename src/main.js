import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

/* import the fontawesome core */

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faUser,
  faLessThan,
  faGreaterThan,
  faMagnifyingGlass,
  faBars,
  faXmark,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faUser,
  faLessThan,
  faGreaterThan,
  faInstagram,
  faFacebook,
  faTiktok,
  faMagnifyingGlass,
  faBars,
  faXmark,
  faMinus,
  faPlus,
  faTrash
);
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
