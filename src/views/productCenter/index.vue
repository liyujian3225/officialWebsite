<template>
  <div class="productCenter">
    <custom-carousel :banner-list="bannerList" :show-tab-nav="true">
      <template #description>
        <p class="mainDes">产品中心</p>
        <p class="subDes">
          <span>以国家中长期发展战略为依据，以市场为导向，把创新发展作为主题，提高公司市场竞争能力</span>
          <br />
          <span>作为主线，创新和改革作为动力。</span>
        </p>
        <div class="more">
          <span>了解更多</span>
        </div>
      </template>
      <template #tabNav>
        <span
          v-for="item in productList"
          :key="item.path"
          :class="[{active: pageName === item.path}, 'nav']"
          @click="handleClickNav(item)">
            {{ item.name }}
          </span>
      </template>
    </custom-carousel>
    <router-view />
  </div>
</template>
<script>
import customCarousel from "@/components/customCarousel"
export default {
  components: { customCarousel },
  data() {
    return {
      pageName: this.$route.name,
      bannerList: [ require("@/assets/productCenter/banner.png") ],
      productList: [
        { name: "NVIM网络可视化智慧管理平台", path: "nvim" },
        { name: "电力能源综合数字平台", path: "electricalEnergyPlatform" },
        { name: "源荷储一体化并网测试平台", path: "sourceChargeStorage" },
        { name: "机房一体化智慧监控平台", path: "machineRoom" },
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
div.productCenter {
  p.mainDes {
    font-size: 36px;
    color: #393939;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p.subDes {
    font-size: 16px;
    color: #666666;
    margin-bottom: 40px;
  }
  div.more {
    width: 96px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border: 1px solid rgba(151,151,151,1);
    cursor: pointer;
    span {
      font-size: 14px;
      color: #666666;
    }
  }
  span.nav {
    font-size: 16px;
    color: #666666;
    cursor: pointer;
    margin-right: 80px;
    &.active {
      color: #FF0000;
    }
  }
}
</style>
