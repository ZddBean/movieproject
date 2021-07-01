<template>
  <div class="bodyPart">
    <ul>
      <li class="unit" v-for="(item, index) in dataList" :key="index">
        <div class="itemPer">
          <div class="cover">
            <img :src="item.imageUrl" alt="" @click="clickEvent(item)" />
          </div>
          <span>{{ item.description }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page_start: "0",
      page_limit: "20",
      tag: "热门",
      type: "movie",
      dataList: [],
      inputValue: "",
    };
  },

  mounted() {
    this.getHotMovieList();
  },
  methods: {
    clickEvent(val) {
      this.$store.commit("setMovieUrl", val.pageUrl);
      this.$store.commit("setMovieName", val.name);
      console.log(val);
      this.$router.push({
        path: "/movie",
      });
    },
    // 获取热门电影列表
    getHotMovieList() {
      var url = `/api/strategy/pcw/data/movieHighScoreRankRow`;
      this.$http
        .get(url)
        .then((response) => {
          console.log(response);
          this.dataList = response.data.data.formatData.scoreRank;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.bodyPart {
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      list-style: none;
      .itemPer {
        width: 300px;
        height: 400px;
        .cover img:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>