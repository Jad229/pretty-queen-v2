import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.js";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
