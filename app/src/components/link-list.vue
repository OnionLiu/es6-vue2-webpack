<template>
  <div>
    <div id="linkList" v-if="managementList">
      <ul>
        <li v-for="(item, key) in managementList" :key="key" v-if="item.ifPermit" class="clearfix">
          <a :href="item.routerLink">
            <i :class="item.iconName"></i>
            {{ item.name }}
            <i class="pull-right">></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      managementList: null,
      startTime: "",
      endTime: ""
    }
  },
  mounted: function () {
    const type = this.$route.query.type,
          saveUserInfo = publicFunObj.getCookie("loginInfo");

    if (type) {
      this.managementList = publicFunObj.getLang("common", "managementList")[type];
    }

    if (saveUserInfo.type === '报单中心') {
      for (let item in this.managementList) {
        this.managementList[item].ifPermit = true;
      }
    }
  },
  methods: {

  },
  watch: {
    $route (to, from) {
      const type = this.$route.query.type;

      this.managementList = publicFunObj.getLang("common", "managementList")[type];
    }


  }
}
</script>

<style lang="less" scoped>
  #linkList {
    
    ul {

      li {
        padding: 0 0.2rem;
        font: 0.2rem/0.58rem "Miscrosoft YaHei";
        border-bottom: 1px solid #cfa972;

        a {
          display: block;
          
          i {
            font-weight: bold;
            font-style: normal;
            color: #cfa972;
          }
          i:first-child {
            margin: 0 0.1rem 0 0;
          }
        }
      }
    }
  }
</style>
