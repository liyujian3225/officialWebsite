<template>
  <div class="contactUs">
    <div class="banner" :style="{height: imgHeight + 'px'}">
      <el-carousel arrow="never" indicator-position="none" :height="imgHeight + 'px'">
        <el-carousel-item>
          <div class="carousel-card">
            <img ref="img" :src="bannerImage" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="description">
        <p>联系我们</p>
        <p>尊重·担当·激情·合作·创新·共赢·服务至上</p>
        <div class="more">
          <span>了解更多</span>
        </div>
      </div>
    </div>
    <div class="content">
      <p class="title">联系我们</p>
      <div class="map">
        <iframe src="/static/map.html" scrolling="auto" frameborder="0" style="width: 1200px;height: 400px;"></iframe>
      </div>
      <p class="content">
        <img :src="addressIcon" alt="">
        <span>公司地址：</span>
        <span>山西省太原市综改示范区学府街区南中环街529号清控创新基地C座19层</span>
      </p>
      <p class="content">
        <img :src="phoneIcon" alt="">
        <span>联系电话：</span>
        <span>0351-7242501 / 7242601 / 7243701</span>
      </p>
      <p class="content">
        <img :src="emailIcon" alt="">
        <span>邮箱信息：</span>
        <span>hlcx@hlcx.cn</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      bannerImage: require("@/assets/contactUs/banner.png"),
      imgHeight: 640,
      addressIcon: require("@/assets/address.svg"),
      emailIcon: require("@/assets/email.svg"),
      phoneIcon: require("@/assets/phone.svg")
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (this.$refs.img) {
        this.imgHeight = this.$refs.img.height;
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.imgHeight = this.$refs.img.height;
    });
  },
}
</script>
<style lang="scss" scoped>
div.contactUs {
  >div.banner {
    width: 100%;
    position: relative;
    div.carousel-card {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
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
        color: #ffffff;
        opacity: 0.8;
        margin-bottom: 40px;
      }
      div.more {
        width: 96px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border: 1px solid #ffffff;
        cursor: pointer;
        span {
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
  }
  >div.content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    >p.title {
      font-size: 28px;
      color: #000000;
      text-align: center;
      margin: 80px 0 60px;
    }
    >div.map {
      width: 1200px;
      height: 400px;
      margin-bottom: 40px;
    }
    >p.content {
      font-size: 16px;
      margin-bottom: 20px;
      height: 21px;
      display: flex;
      align-items: center;
      &:last-child {
        margin-bottom: 80px;
      }
      img:first-child {
        margin-right: 10px;
        vertical-align: center;
      }
      span:nth-child(2) {
        margin-right: 4px;
        font-size: 16px;
        color: #000000;
      }
      span:last-child {
        font-size: 16px;
        color: #999999;
      }
    }
  }
}
</style>
