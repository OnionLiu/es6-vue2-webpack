<template>
  <div id="filter-by-id">
    <span>key：</span>
    <input type="text" v-model="key">
    <button @click="search()">搜索</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      key: ""
    }
  },
  props: ["httpURL"],
  methods: {
    search() {
      const _this = this
      if (this.key) {
        this.$http.get(this.httpURL + "?key=" + this.key).then(response => {
          if (response.body.code === 0) {
            for (let item in response.body.data) {
              swal({
                title: "警告",
                text: response.body.data[item][0],
                icon: "warning"
              });
              break;
            }
          } else if (response.body.code === 1) {
            _this.$emit("searchData", response.body.data);
          }}, response => {
          
        });
      }

    }
  }
}
</script>

<style lang="less" scoped>
  #filter-by-id {
    padding: 20px 20px 10px;
    font: 16px/26px 'Sim Hei';
    color: #d8d8d8;

    input,button {
      height: 26px;
      margin: 0 10px 20px 0;
      border: 0;
      border-radius: 5px;
    }
    input {
      width: 100px;
      padding: 0 0 0 10px;
      background: #d8d8d8;
      color: #303030; 
    }
    button {
      background: #cfa972;
      padding: 0 10px;
      color: #fff;
    }
  }
</style>
