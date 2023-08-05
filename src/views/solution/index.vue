<template>
  <div class="solution">
    <custom-carousel :banner-list="bannerList" :show-tab-nav="true">
      <template #description>
        <p class="mainDes">解决方案</p>
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
      bannerList: [ require("@/assets/solution/banner.png") ],
      productList: [
        { name: "发电业务", path: "powerPlant" },
        { name: "电网业务", path: "powerGrid" },
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
  p.mainDes {
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p.subDes {
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
  span.nav {
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    margin-right: 80px;
    &.active {
      color: #FF0000;
    }
  }
}
</style>

