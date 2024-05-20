import "./styles/style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import { Layout as App } from "./Layout";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
