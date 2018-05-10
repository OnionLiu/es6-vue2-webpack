<template>
  <div id="filter-by-time">
    <div id="startTime">
      <span>开始时间：</span>
      <input id="startYear" type="number" placeholder="年" v-model="startTime.year" @keyup="yearInput($event, startTime.year)">
      -
      <input id="startMonth" type="number" placeholder="月" v-model="startTime.month" @keyup="monthInput($event, startTime.month)">
      -
      <input id="startDay" type="number" placeholder="日" v-model="startTime.day" @keyup="dayInput($event, startTime.day)">
    </div>
    <div id="endTime">
      <span>结束时间：</span>
      <input id="endYear" type="number" placeholder="年" v-model="endTime.year" @keyup="yearInput($event, endTime.year)">
      -
      <input id="endMonth" type="number" placeholder="月" v-model="endTime.month" @keyup="monthInput($event, startTime.month)">
      -
      <input id="endtDay" type="number" placeholder="日" v-model="endTime.day" @keyup="dayInput($event, startTime.day)">
    </div>
    <button @click="search()">搜索</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      startTime: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDay(),
      },
      endTime: {
        year: "",
        month: "",
        day: ""
      }
    }
  },
  props: ["httpURL"],
  mounted() {
    
  },
  methods: {
    yearInput(event, data) {
      if (data.length === 4) {
        event.target.nextSibling.nextSibling.focus();
      }
    },
    monthInput(event, data) {
      if (data.length === 2) {
        event.target.nextSibling.nextSibling.focus();
      }
    },
    dayInput(event, data) {
      if (data.length === 2) {
        event.target.blur();
      }
    },
    search() {
      const _this = this;

      this.$http.get(this.httpURL + "?startTime=" + this.startTime + "&endTime" + this.endTime).then(response => {
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
          _this.$emit("searchData", response.body.data, {startTime: this.startTime, endTime: this.endTime});
        }}, response => {
        
      });
    }
  }
}
</script>

<style lang="less" scoped>
  #filter-by-time {
    padding: 20px 20px 10px;
    font: 16px/26px 'Sim Hei';
    color: #d8d8d8;

    input,button {
      height: 26px;
      margin: 0 0 20px 0;
      border: 0;
      border-radius: 5px;
    }
    input {
      width: 60px;
      padding: 0 0 0 10px;
      background: #d8d8d8;
      color: #303030;
    }
    button {
      background: #cfa972;
      padding: 0 10px;
      color: #fff;
    }

    #startTime, #endTime {
      display: inline-block;
      margin: 0 10px 0 0;

      span {
        color: #cfa972;
      }
    }
  }
</style>
