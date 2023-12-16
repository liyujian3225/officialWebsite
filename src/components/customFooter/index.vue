<template>
  <div class="footer">
    <div class="footer_inner">
      <div class="content">
        <div class="leftMenu">
          <ul>
            <li v-for="(item, index) in renderData">
              <div class="title">{{ item.name }}</div>
              <p
                v-for="(j, jIndex) in item.content"
                :key="jIndex"
                @click="dumpRoute(j)">
                {{ j.name }}
              </p>
            </li>
          </ul>
        </div>
        <div class="rightQrCode">
          <div class="attentionWay">
            <div class="qrCode">
              <img :src="qrCodeImg" alt="">
            </div>
            <p>—       关注我们    —</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyRight">
      <div>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=14019202000516">
          <img src="../../assets/home/record.png"/>
          <p>晋公网安备 14019202000516号</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qrCodeImg: require("@/assets/home/qrCode.png"),
      renderData: [
        {
          name: "关于合力",
          content: [
            { name: "企业简介", path: "home", anchorPoint: "companyProfile" },
            { name: "区域布局", path: "home", anchorPoint: "map" },
            { name: "发展历程", path: "home", anchorPoint: "developmentHistory" },
            { name: "荣誉资质", path: "home", anchorPoint: "honorQualification" },
            { name: "合作客户", path: "home", anchorPoint: "cooperativeClient" },
          ]
        },
        {
          name: "产品中心",
          content: [
            { name: "NVIM网络可视化智慧管理平台", path: "nvim" },
            { name: "电力能源综合数字平台", path: "electricalEnergyPlatform" },
            { name: "源荷储涉网试验报告分析平台", path: "sourceChargeStorage" },
            { name: "DVIM数据中心可视化智慧管理平台", path: "machineRoom" },
          ]
        },
        {
          name: "解决方案",
          content: [
            { name: "发电业务", path: "powerPlant" },
            { name: "电网业务", path: "powerGrid" },
            { name: "电力能源综合服务", path: "electricalEnergy" },
            { name: "售电业务", path: "sellingElectricity" },
          ]
        },
        { name: "新闻中心", content: [{ name: "公司新闻", path: "newsCenter"}] },
        { name: "加入我们", content: [{ name: "加入我们", path: "joinUs"}] },
        { name: "联系我们", content: [{ name: "联系我们", path: "contactUs"}] },
      ]
    }
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
  }
}
</script>
<style lang="scss" scoped>
div.footer {
  overflow: hidden;
  >div.footer_inner {
    width: 100%;
    height: 414px;
    background: #272A30;
    >div.content {
      width: 1200px;
      height: 414px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: start;
      padding: 80px 0;
      box-sizing: border-box;
      div.leftMenu {
        ul {
          display: flex;
          justify-content: start;
          li {
            margin-right: 60px;
            div.title {
              height: 18px;
              line-height: 18px;
              font-size: 18px;
              color: #FFFFFF;
              margin-bottom: 36px;
            }
            p {
              height: 16px;
              line-height: 16px;
              font-size: 14px;
              color: #FFFFFF;
              margin-bottom: 30px;
              cursor: pointer;
            }
          }
        }
      }
      div.rightQrCode {
        >div.attentionWay {
          >div.qrCode {
            width: 130px;
            height: 130px;
            margin-bottom: 21px;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          >p {
            font-size: 18px;
            color: #FFFFFF;
            text-align: center;
          }
        }
      }
    }
  }
  >div.copyRight {
    width: 100%;
    height: 70px;
    background: #1A1C1D;
    display: flex;
    align-items: center;
    justify-content: center;
    >div {
      height: 20px;
      a {
        display:inline-block;
        text-decoration:none;
        height:20px;
        line-height:20px;
        img {
          float: left;
        }
        p {
          float: left;
          height: 20px;
          line-height: 20px;
          margin: 0 0 0 5px;
          color: #ffffff;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
