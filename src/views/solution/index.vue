<template>
  <div class="solution">
    <div class="banner">
      <el-carousel arrow="never" indicator-position="none" height="640px">
        <el-carousel-item>
          <img :src="bannerImage" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="description">
        <p>解决方案</p>
        <p>
          <span>以国家中长期发展战略为依据，以市场为导向，把创新发展作为主题，提高公司市场竞争能力</span>
          <br />
          <span>作为主线，创新和改革作为动力。</span>
        </p>
        <div class="more">
          <span>了解更多</span>
        </div>
      </div>
      <div class="tabNav">
        <div class="tabNav_inner">
          <span
            v-for="item in productList"
            :key="item.path"
            :class="{active: pageName === item.path}"
            @click="handleClickNav(item)">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageName: this.$route.name,
      bannerImage: require("@/assets/solution/banner.png"),
      productList: [
        { name: "发电业务", path: "powerPlant" },
        { name: "用电业务", path: "powerGrid" },
        { name: "电力能源综合服务", path: "electricalEnergy" },
        { name: "售电业务", path: "sellingElectricity" },
      ]
    }
  },
  methods: {
    handleClickNav(item) {
      const { path } = item;
      this.$router.push({ name: path })
    }
  }
}
</script>
<style lang="scss" scoped>
div.solution {
  >div.banner {
    width: 100%;
    height: 640px;
    position: relative;
    div.description {
      width: 1200px;
      position: absolute;
      top: 225px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 10;
      p:first-child {
        font-size: 36px;
        color: #ffffff;
        font-weight: bold;
        margin-bottom: 30px;
      }
      p:nth-child(2) {
        font-size: 16px;
        color: #FFFFFF;
        opacity: 0.8;
        margin-bottom: 40px;
      }
      div.more {
        width: 96px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border: 1px solid #FFFFFF;
        cursor: pointer;
        span {
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
    div.tabNav {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 10;
      div.tabNav_inner {
        width: 1200px;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
        span {
          font-size: 16px;
          color: #ffffff;
          cursor: pointer;
          margin-right: 80px;
          &.active {
            color: #FF0000;
          }
        }
      }
    }
  }
}
</style>

