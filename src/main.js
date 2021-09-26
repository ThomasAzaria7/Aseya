import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router";

import MainNav from "./components/header/MainNav.vue";

const app = createApp(App);
app.use(router);

app.component("main-nav", MainNav);

app.mount("#app");
