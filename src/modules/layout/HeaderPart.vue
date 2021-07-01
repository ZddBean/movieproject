<template>
  <div>
    <div class="search">
      <el-input
        placeholder="请输入内容"
        v-model="inputValue"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <el-radio-group v-model="radio">
      <el-radio :label="3">影视</el-radio>
      <el-radio :label="6">电视剧</el-radio>
      <el-radio :label="9">其他</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      radio: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding-bottom: 20px;
}
</style>