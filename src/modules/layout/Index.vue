<template>
  <div class="hello">
    <el-container>
      <el-header>
        <HeaderPart></HeaderPart>
      </el-header>
      <el-main>
        <main-part></main-part>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderPart from "./HeaderPart.vue";
import MainPart from "./MainPart.vue";

export default {
  components: { HeaderPart, MainPart },
  name: "Index",
  data() {
    return {
      radio: "3",
      input3: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
