
import Vue from "vue";
import Vuex, { ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState, UserState } from "./types";

import { getUnits, getGameConfig } from "./api";

Vue.use(Vuex);

const user = {
  namespaced: true,
  state: {
    isLoggedIn: true,
    config: {},
    units: {},
  } as UserState,
  mutations: {
    units(state: UserState, units) {
      state.units = units;
    },
    config(state: UserState, config) {
      state.config = config;
    },
  } as MutationTree<UserState>,
  actions: {
    async getUnits({ commit }) {
      const units = await getUnits();
      commit("units", units);
      return units;
    },
    async getConfig({ commit }) {
      const config = await getGameConfig();
      commit("config", config);
      return config;
    },
  } as ActionTree<UserState, RootState>,
  getters: {
    isLoggedIn(state: UserState) {
      return state.isLoggedIn;
    },
    units(state: UserState) {
      return state.units;
    },
    config(state: UserState) {
      return state.config;
    },
  } as GetterTree<UserState, RootState>,
};

export default new Vuex.Store<RootState>({
  modules: {
    user,
  },
});
