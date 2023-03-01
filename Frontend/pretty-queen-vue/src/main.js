import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
// import "./assets/styles.css";

app.use(router);

createApp(App).mount("#app");
