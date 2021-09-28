import {createApp} from "vue";
import App from "./App.vue";
import router from "./routes/router";
import store from "./state/rootIndex.js";

import MainNav from "./components/header/MainNav.vue";

const app = createApp(App);
app.use(router);
app.use(store);

app.component("main-nav", MainNav);

app.mount("#app");
