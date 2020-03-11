<template>
  <div class="article-wrapper">
    <div class="article-container"></div>
  </div>
</template>

<script>
export default {
  name: "Article",
  components: {
    // HelloWorld
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../styles/page.scss";
.article-wrapper {
  background: blueviolet;
  .article-container {
    background: brown;
  }
}
</style>
