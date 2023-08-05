<template>
  <div class="customCarousel">
    <div class="banner" :style="{height: imgHeight + 'px'}">
      <el-carousel arrow="never" indicator-position="none" :height="imgHeight + 'px'">
        <el-carousel-item>
          <div class="carousel-card" v-for="(img, index) in bannerList" :key="index">
            <img ref="img" :src="img" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="description">
        <slot name="description"></slot>
      </div>
      <div class="tabNav" v-if="showTabNav">
        <div class="tabNav_inner">
          <slot name="tabNav"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bannerList: {
      type: Array,
      required: true
    },
    showTabNav: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      imgHeight: 0,
    }
  },
  mounted() {
    this.initImgHeight();
    window.addEventListener("resize", this.updateImgHeight);
  },
  methods: {
    initImgHeight() {
      this.$nextTick(function () {
        if(this.$refs.img.length) {
          this.$refs.img[0].onload = () => {
            this.imgHeight = this.$refs.img[0].height;
          }
        }
      });
    },
    updateImgHeight() {
      this.imgHeight = this.$refs.img[0].height;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateImgHeight);
  },
}
</script>
<style lang="scss" scoped>
div.customCarousel {
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
      top: 0; bottom: 0;
      left: 0; right: 0;
      margin: auto;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
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
      }
    }
  }
}
</style>
