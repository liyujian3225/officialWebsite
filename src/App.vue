<template>
  <div id="app">
    <div class="goTop" ref="scrollContent" @scroll="listenScroll">
      <custom-header class="topHeader" :showDarkNav="showDarkNav" />
      <router-view :key="$route.fullPath"/>
      <custom-footer />
      <el-backtop target=".goTop" :right="60" :bottom="80">
        <i class="el-icon-top"></i>
      </el-backtop>
    </div>
  </div>
</template>
<script>
import customHeader from "@/components/customHeader";
import customFooter from "@/components/customFooter";
export default {
  components: {
    customHeader,
    customFooter,
  },
  data() {
    return {
      showDarkNav: false,
    }
  },
  methods: {
    listenScroll(e) {
      let ele = e.srcElement ? e.srcElement : e.target;
      this.showDarkNav = ele.scrollTop >= 642 - 62;
      // if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) { //监听滚动到div底部
      //   alert("我到底了！")
      // }
    },
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  position: relative;
}

.el-backtop {
  color: #666666 !important;
  &:hover {
    color: #FF0000 !important;
  }
}

.goTop {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  .el-icon-top {
    font-weight: bold;
  }
}

.topHeader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

</style>
