
import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./../types.d";

Vue.use(Vuex);

const user = {
  namespaced: true,
  state: {
    isLoggedIn: true,
  },
  mutations: {},
  actions: {},
  getters: {
    isLoggedIn(state: any) {
      return state.isLoggedIn;
    },
  },
};

export default new Vuex.Store<RootState>({
  modules: {
    user,
  },
});
