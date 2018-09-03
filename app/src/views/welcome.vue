<template>
  <div id="welcome">
    welcome
  </div>
</template>

<script>
import Common from "../assets/public/public.js";

export default {
  created() {
    const commoIns = new Common();
    commoIns.setPublicFontSize(750);
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
