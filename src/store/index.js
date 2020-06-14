import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let endedApi = "https://api.jikan.moe/v3/top/anime/1/tv?subtype=tv";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    endedList: [],
  },
  mutations: {
    addEndedList(state, { response }) {
      state.endedList = response.data.top;
    },
  },
  actions: {
    async addEndedList({ commit }) {
      await axios
        .get(endedApi)
        .then((response) => commit("addEndedList", { response }))
        .catch((error) => alert(error));
    },
  },
  getter: {
    endedListApi: (state) => {
      return state.endedList;
    },
  },
});
