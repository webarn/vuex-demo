import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 数据
  state: {
    count: 0
  },
  // 数据操作
  mutations: {
    add(state) {
      state.count++;
    },
    sum(state, val) {
      state.count = state.count - val;
    }
  },
  // 过滤计算
  getters: {},
  // 异步操作
  actions: {
    time({ commit }) {
      setTimeout(() => {
        commit("add");
      }, 500);
    }
  }
});
