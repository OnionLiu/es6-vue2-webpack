<template>
  <div id="welcome">
    welcome
  </div>
</template>

<script>
import common from "../assest/public/public.js";

export default {
  mounted() {
    const Common = new common();
    Common.setPublicFontSize(750);
  }
}
</script>

<style lang="less" scoped>
  #welcome {
    font: bold 0.24rem/0.4rem 'Sim Hei';
    color: black;
    text-align: center;
  }
</style>
