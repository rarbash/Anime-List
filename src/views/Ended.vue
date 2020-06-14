<template>
  <div>
    <br />
    <br />
    <topList category="Ended" :topLists="endedTopList" v-if="endedTopList.length !== 0"></topList>
  </div>
</template>

<script>
import topList from "@/components/topList.vue";
import axios from "axios";

export default {
  components: {
    topList
  },
  data() {
    return {
      endedTopList: []
    };
  },
  mounted() {
    this.getAnimeList();
  },
  methods: {
    async getAnimeList() {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v3/top/anime/1/tv?subtype=tv"
        );
        this.endedTopList = response.data.top;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
