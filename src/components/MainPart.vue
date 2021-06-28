<template>
  <div class="bodyPart">
    <ul>
      <li class="unit" v-for="(item, index) in dataList" :key="index">
        <div class="itemPer">
          <div class="cover" @click="clickEvent(item.title)">
            <img :src="item.imageUrl" />
          </div>
          <span>{{ item.description }}</span>
          <!-- <iframe
            :src="item.cover"
            class="frame"
            border="0"
            :title="item.description"
          ></iframe>
         -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AutoShrink from "pingansec-auto-shrink";
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
    //this.idEvebt();
  },
  methods: {
    idEvebt() {
      //非vue 省略这行

      AutoShrink.adjust(document.querySelector("#test"), {
        maxSize: 200,
      });
    },
    clickEvent(val) {
      // alert(val);
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

      // height: 450px;
      .itemPer {
        width: 300px;
        height: 400px;
        // height: 100%;
        // position: releative;
        .cover {
          // position: absolute;
          // width: 300px;
          // height: 400px;
          // cursor: pointer;
          // z-index: 2;
        }
      }
    }
  }
}
</style>