import {createApp} from "vue";
import App from "./App.vue";
import router from "./routes/router";
import store from "./state/rootIndex.js";

import MainNav from "./components/header/MainNav.vue";

const app = createApp(App);
// modules
app.use(router);
app.use(store);

// /components
app.component("main-nav", MainNav);

// mouting app
app.mount("#app");
