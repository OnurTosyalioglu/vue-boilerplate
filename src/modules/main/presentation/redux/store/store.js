import { createStore } from "vuex";

const store = createStore({
  modules: {
    ex: {
      state: {
        number: 1,
      },
      actions: {},
      mutations: {},
      getters: {},
    },
  },
});

export default store;
