<template>
  <div class="customHeader" :style="{background: showDarkNav ? 'rgba(0, 0, 0, 0.3)' : 'unset'}">
    <div class="leftLogo" @click="dumpRoute({ path: 'home'})">
      <img :src="logoUrl" alt="">
    </div>
    <div class="rightNav">
      <div class="nav">
        <div
          :class="{active: navActive === item}"
          v-for="(item, index) in navList"
          :key="index"
          @click="$router.push({ name: item})"
        >
          <span class="item" :style="{color}">{{ $t('header.' + item) }}</span>
          <div
            class="sonMenu"
            :style="{width: sonNavList[item].width}"
            v-if="['home', 'productCenter', 'solution'].includes(item)"
          >
            <p
              v-for="(sItem, sIndex) in sonNavList[item].list"
              :key="sIndex"
              @click.stop="dumpRoute(sItem)">
              {{ sItem.name }}</p>
          </div>
        </div>
      </div>
<!--      <div class="switchLanguage" @click="switchLanguage">-->
<!--        <span class="item" :style="{color}">{{ $t('language.name') }}</span>-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showDarkNav: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      //logo相关
      logoImg: require("@/assets/home/logo.png"), //浅色logo
      logoDarkImg: require("@/assets/home/logoDark.png"),  //暗黑logo
      logoUrl: require("@/assets/home/logo.png"),
      //菜单相关
      navList: ["home", "productCenter", "solution", "newsCenter", "joinUs", "contactUs"],
      navActive: "home",
      color: "#ffffff",
      //子菜单相关
      sonNavList: {
        home: {
          width: "68px",
          list: [
            { name: "企业简介", path: "home", anchorPoint: "companyProfile" },
            { name: "区域布局", path: "home", anchorPoint: "map" },
            { name: "发展历程", path: "home", anchorPoint: "developmentHistory" },
            { name: "荣誉资质", path: "home", anchorPoint: "honorQualification" },
            { name: "合作客户", path: "home", anchorPoint: "cooperativeClient" },
          ]
        },
        productCenter: {
          width: "250px",
          list: [
            { name: "NVIM网络可视化智慧管理平台", path: "nvim" },
            { name: "电力能源综合数字平台", path: "electricalEnergyPlatform" },
            { name: "源荷储涉网试验报告分析平台", path: "sourceChargeStorage" },
            { name: "DVIM数据中心可视化智慧管理平台", path: "machineRoom" },
          ]
        },
        solution: {
          width: "128px",
          list: [
            { name: "发电业务", path: "powerPlant" },
            { name: "电网业务", path: "powerGrid" },
            { name: "电力能源综合服务", path: "electricalEnergy" },
            { name: "售电业务", path: "sellingElectricity" },
          ]
        }
      }
    }
  },
  watch: {
    "$route.name": {
      handler: function(v) {
        const darkModePath = ["nvim", "electricalEnergyPlatform", "sourceChargeStorage", "machineRoom", "newsCenterDetail"]
        if(v) {
          if(darkModePath.includes(v)) {
            this.color = "#333333";
            this.logoUrl = this.logoDarkImg;
          }else {
            this.color = "#ffffff";
            this.logoUrl = this.logoImg;
          }
          this.navActive = v;
          if (["nvim", "electricalEnergyPlatform", "sourceChargeStorage", "machineRoom"].includes(v)) {
            this.navActive = "productCenter";
          }
          if (["powerPlant", "powerGrid", "electricalEnergy", "sellingElectricity"].includes(v)) {
            this.navActive = "solution";
          }
          if (["newsCenterDetail"].includes(v)) {
            this.navActive = "newsCenter";
          }
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    dumpRoute(data) {
      const { name = undefined, path, anchorPoint = undefined } = data;
      this.$router.push({
        name: path,
        query: {
          anchorPoint,
        }
      })
    },
    switchLanguage() {
      const lan = this.$t('language.name');
      if(lan === "EN") {
        this.$i18n.locale = "en";
      }else {
        this.$i18n.locale = "zh";
      }
    },
  }
}
</script>
<style lang="scss" scoped>
div.customHeader {
  width: calc(100% - 17px);
  height: 62px;
  margin-right: 17px;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div.leftLogo {
    width: 131px;
    height: 41px;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  div.rightNav {
    height: 45px;
    display: flex;
    justify-content: end;
    align-items: center;
    div.nav {
      height: 45px;
      display: flex;
      justify-content: end;
      >div {
        height: 43px;
        line-height: 43px;
        margin-left: 40px;
        position: relative;
        span.item {
          font-size: 18px;
          font-weight: 400;
          cursor: pointer;
          transition: color .35s linear;
        }
        div.sonMenu {
          display: none;
          padding: 24px;
          border-radius: 4px;
          background: #F8F8F8;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          position: absolute;
          left: 0;
          top: 45px;
          p {
            line-height: 16px;
            font-size: 16px;
            color: #333333;
            cursor: pointer;
            transition: color .35s linear;
            &:not(:last-child) {
              margin-bottom: 20px;
            }
            &:hover {
              color: #FF0000;
            }
          }
        }
        &.active {
          border-bottom: 2px solid #FF0000;
        }
        &:hover {
          div.sonMenu {
            display: block;
          }
        }
      }
    }
    div.switchLanguage {
      height: 45px;
      line-height: 45px;
    }
  }
}
</style>
