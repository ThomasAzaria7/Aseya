import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router";
import store from "./state/rootIndex.js";

import MainNav from "./components/header/nav/MainNav.vue";

// import { firebaseApp } from "./database/database";
// console.log(firebaseApp);

const app = createApp(App);

// modules
app.use(router);
app.use(store);
// app.use(firebaseApp);

// /components
app.component("main-nav", MainNav);

// mouting app
app.mount("#app");
