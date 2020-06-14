<template>
  <div>
    <h1>Top 50 {{ category }} Anime</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-12 card border-0">
        <img class="card_img" :src="topLists[0].image_url" alt="card_img" />
        <span class="card_detail">
          <h5>{{ topLists[0].title }}</h5>
          <h6>Ep: {{ topLists[0].episodes }}</h6>
          <h6>Rating: {{ topLists[0].score }}</h6>
        </span>
      </div>
    </div>
    <br />

    <div class="row">
      <div
        class="col-md-4 col-sm-6"
        v-for="(topList, index) in topLists"
        :key="index"
        v-show="index !== 0 "
      >
        <div class="col-md-12">
          <br />
          <br />
          <a :href="topList.url">
            <div class="card border-0">
              <img class="card_img" :src="topList.image_url" alt="card_img" />
              <span class="card_detail">
                <h6>{{ topList.title }}</h6>
                <h6 v-if="topList.episodes !== null ">Ep: {{ topList.episodes }}</h6>
                <h6 v-else>Ep: Unknown</h6>
                <h6>Rating: {{ topList.score }}</h6>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: String,
    topLists: Array
  }
};
</script>

<style>
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;
}
.card {
  width: 300px;
  height: 500px;
  float: left;
  margin: 3px;
  padding: 3px;
  color: black;
  transition: transform 1s;
}
.card:hover {
  transform: scale(1.05);
  color: gray;
  opacity: 0.7;
}
</style>
