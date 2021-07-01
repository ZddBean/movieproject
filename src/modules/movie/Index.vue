<template>
  <div>
    <bread-crumb :breads="breadsData.breads" :title="breadsData.title">
      <template slot="action">
        <el-button type="primary" @click="goBack()">返回</el-button>
      </template>
    </bread-crumb>
    <div>
      <ul>
        <span>切换播放源</span>
        <li v-for="item in selectArr">
          <el-button type="primary" @click="selectSourceEvent(item.value)">{{
            item.name
          }}</el-button>
        </li>
      </ul>
      <iframe
        :src="videoUrl"
        frameborder="no"
        scrolling="no"
        allowfullscreen="true"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadsData: {
        breads: [
          {
            title: "",
          },
        ],
        title: "电影",
      },
      videoUrl: "",
      selectValue: "",
      selectArr: [
        { name: "默认", value: "https://z1.m1907.cn/?jx=" },
        { name: "618G", value: "https://jx.618g.com/?url=" },
        { name: "OK", value: "https://okjx.cc/?url=" },
        { name: "1717云", value: "https://jx.ab33.top/vip/?url=" },
        { name: "AB", value: "https://jx.ab33.top/vip/?url=" },
        { name: "58", value: "https://jx.km58.top/jx/?url=" },
        { name: "180", value: "https://jx.000180.top/jx/?url=" },
        { name: "狂野", value: "https://api.653520.top/vip/?url=" },
      ],
    };
  },
  computed: {
    movieUrl() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getMovieUrl;
    },
    movieName() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getMovieName;
    },
  },
  mounted() {
    console.log(this.movieUrl);
    console.log(this.movieName);
    this.$nextTick(() => {
      this.breadsData.breads[0].title = this.movieName;
      this.videoUrl = "https://z1.m1907.cn/?jx=" + this.movieUrl;
    });
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/",
      });
    },
    selectSourceEvent(url) {
      this.videoUrl = url + this.movieUrl;
    },
  },
};
</script>

<style lang="scss" scoped>
iframe {
  width: 1000px;
  height: 550px;
}
ul {
  list-style: none;
  display: flex;
  li {
    width: 100px;
    height: 30px;
  }
}
</style>