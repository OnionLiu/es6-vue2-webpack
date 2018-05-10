<template>
  <div id="select" v-if="data">
    <!-- 选中 -->
    <h3 id="select-title" v-if="selectTitle" @click="titleClick($event)">
      <i :class="selectTitle.iconName"></i>
      {{ selectTitle.optionText }}
    </h3>
    <!-- 选择列表 -->
    <ul id="select-options">
      <li v-for="(item, key) in data" :key="key" @click="optionClick($event, item)">
        <i :class="item.iconName"></i>
        {{ item.optionText }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      selectTitle: {
        iconName: "",
        optionText: "请选择",
        optionValue: ""
      }
    }
  },
  props: ["data"],
  methods: {
    titleClick(event) {
      if (event.target.classList.contains("active")) {
        event.target.classList.remove("active");
        document.querySelector("#select-options").classList.remove("active");
      } else {
        event.target.classList.add("active");
        document.querySelector("#select-options").classList.add("active");
      }
    },
    optionClick(event, item) {
      this.selectTitle = item;
      document.querySelector("#select-title").classList.remove("active");
      document.querySelector("#select-options").classList.remove("active");
      window.location.href = item.optionValue;
    }
  }
}
</script>

<style lang="less" scoped>
  #select {
    width: 100%;
    height: 100%;
    cursor: pointer;

    i {
      position: absolute;
      left: 20px;
      top: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0;
    }
    #select-title {
      position: relative;
      width: 100%;
      height: 100%;
    }
    #select-options {
      overflow: auto;
      height: 0;
      transition: 0.5s;

      li {
        position: relative;
        border-bottom: 1px solid #999;
      }
      li:hover {
        border-color: #cfa972;
        color: #cfa972;
      }
    }
    #select-options.active {
      height: 200px;
    }
    #select-options::-webkit-scrollbar {
      display: none;
    }
  }
</style>
