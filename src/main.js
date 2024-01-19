import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      uzl: 1,
      cau: 1,
      euf: 1,
      jahr: 0,
    };
  },
  mutations: {
    toggleUzl(state) {
      if (state.uzl != 0) {
        state.uzl = 0;
      } else {
        state.uzl = 1;
      }
    },
    toggleCau(state) {
      if (state.cau != 0) {
        state.cau = 0;
      } else {
        state.cau = 1;
      }
    },
    toggleEuf(state) {
      // state.euf == 0 ? 1 : 0;
      if (state.euf != 0) {
        state.euf = 0;
      } else {
        state.euf = 1;
      }
    },
    setJahr(state, value) {
      state.jahr = value;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
