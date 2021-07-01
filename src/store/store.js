import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let store = new Vuex.Store({
  // 1. state
  state: {
    movieUrl: "",
    movieName: ""
  },

  // // 2. getters
  getters: {
    // 参数列表state指的是state数据
    getMovieUrl(state) {
      return state.movieUrl;
    },
    getMovieName(state) {
      return state.movieName;
    }
  },
  // 3. actions
  // 通常跟api接口打交道
  actions: {
    // 设置信息
    // 参数列表：{commit, state}
    // state指的是state数据
    // commit调用mutations的方法
    // name就是调用此方法时要传的参数
    setMovieUrl({ commit, state }, name) {
      commit("setMovieUrl", name);
    },
    setMovieName({ commit, state }, name) {
      commit("setMovieName", name);
    }
  },
  // 4. mutations
  mutations: {
    // state指的是state的数据
    // name传递过来的数据
    setMovieUrl(state, name) {
      state.movieUrl = name; //将传参,设置给state
    },
    setMovieName(state, name) {
      state.movieName = name; //将传参设置给state
    }
  }
});

export default store;
