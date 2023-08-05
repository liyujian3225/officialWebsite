<template>
  <div class="powerGrid">
    <div class="baseInfo">
      <div class="baseInfo_inner">
        <p>电网业务</p>
        <p>多年来，我公司专注于国家电网信息化系统的研发建设及运维服务，对国家电网信息化的建设、运维工作有着深刻的理解和认知，同时积累了丰富的技术服务经验。</p>
        <p>公司拥有一支精通数据中心、IT基础设施、数据主机系统数据库、网络、安全、存储、备份、视讯等技术领域的专业技术团队，在国家电网的数据中心机房建设、综合性广域网、信息安全、音视频集成等项目中具有扎实的技术实力，尤其是在电力调控自动化系统和通信网络建设方面有着非常丰富的架构设计、研发和实施经验。</p>
        <p>为更加深入的贯彻“面向用户的解决方案与及时响应的服务公司成立了专门的IT运维服务团队，常驻省、地级国家电网公司、电科院等重点用户单位，强调服务速度和效率，为用户提供设备维护、系统巡检、功能优化、运行监控等多种技术支持服务，真正保障了国家电网信息化系统的不间断运行。</p>
        <ul>
          <li>
            <img :src="a6" alt="">
            <img :src="a6_" alt="">
          </li>
          <li>
            <img :src="a7" alt="">
            <img :src="a7_" alt="">
          </li>
          <li>
            <img :src="a8" alt="">
            <img :src="a8_" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <p class="title">系统集成—电力全覆盖接入平台</p>
      <p class="subtitle"> 系统采用标准IEC-104、modbus等协议进行底层技术实现，满足“安全分区、网络专用、横向隔离、纵向认证”的安全要求。实现对光伏站、小火电、水电站风电场等各型电站的数据采集、运行监视、参数配置等，满足地区小电站的安全并网及调度运行管理。</p>
      <img :src="a1" alt="">
      <p class="title">数据中心—系统集成及运维服务</p>
      <p class="subtitle" style="text-align: center;">数据中心资源监控 数据中心基础设施管理系统（DCIM）</p>
      <img :src="a2" alt="">
      <p class="title">数据通信—系统集成及运维服务</p>
      <p class="subtitle" style="text-align: center;">电力传输网 调度生产网 信息管理网络建设</p>
      <img :src="a3" alt="" style="margin-bottom: 80px;">
    </div>
    <div class="softwareDevelopment">
      <img class="bg" :src="a4" alt="">
      <div class="softwareDevelopmentInner">
        <p class="title">软件研发</p>
        <p class="detail">合力创新研发中心致力为电力行业数字化转型提供全生命周期的研发及技术支撑服务。研发中心围绕国家数字化新基建，采用全国产化产品及国密加密标准研发的系列产品通过国网电力科学研究院有限公司实验验证中心的增强级安全认证，获得安全入网许可；以“云”、“管”、“边”、“端”为基础，实现“大”、“云”、“物”、“移”、“智”，为电网行业发、输、变、配、用用户提供专业的研发技术支撑及电力能源综合服务。</p>
        <img :src="a5" alt="">
<!--        <ul>-->
<!--          <li v-for="(item, index) in powerGridList">-->
<!--            <div class="linearGradient"></div>-->
<!--            <div class="img">-->
<!--              <img class="default" :src="item.img" alt="">-->
<!--              <img class="point" :src="item.hoverImg" alt="">-->
<!--            </div>-->
<!--            <div class="description">-->
<!--              <p>{{item.title}}</p>-->
<!--              <p>{{item.content}}</p>-->
<!--            </div>-->
<!--          </li>-->
<!--        </ul>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a1: require("@/assets/solution/a1.png"),
      a2: require("@/assets/solution/a2.png"),
      a3: require("@/assets/solution/a3.png"),
      a4: require("@/assets/solution/a4.png"),
      a5: require("@/assets/solution/a5.png"),
      a6: require("@/assets/solution/a6.png"),
      a7: require("@/assets/solution/a7.png"),
      a8: require("@/assets/solution/a8.png"),

      a6_: require("@/assets/solution/a6_.png"),
      a7_: require("@/assets/solution/a7_.png"),
      a8_: require("@/assets/solution/a8_.png"),

      powerGridList: [
        {
          title: "专业研发团队",
          content: "来自华为、阿里、金山、中兴等十多年的专业经验。",
          img: require("@/assets/solution/1.png"),
          hoverImg: require("@/assets/solution/1-hover.png"),
        },
        {
          title: "全生命周期研发体系",
          content: "获得CMMI v2.0 L3级认证。",
          img: require("@/assets/solution/2.png"),
          hoverImg: require("@/assets/solution/2-hover.png"),
        },
        {
          title: "基于微服务的技术架构",
          content: "独立部署，独立运行，轻量级通信协议支持多种编程语言。",
          img: require("@/assets/solution/3.png"),
          hoverImg: require("@/assets/solution/3-hover.png"),
        },
        {
          title: "低代码开发平台",
          content: "高效的自研低代码开发平台。",
          img: require("@/assets/solution/4.png"),
          hoverImg: require("@/assets/solution/4-hover.png"),
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
div.powerGrid {
  >div.baseInfo {
    width: 100%;
    height: 646px;
    background: #f1f1f1;
    >div.baseInfo_inner {
      width: 1200px;
      height: 646px;
      margin: 0 auto;
      padding-top: 80px;
      box-sizing: border-box;
      >p {
        &:first-child {
          font-size: 28px;
          color: #000000;
          text-align: center;
          margin-bottom: 40px;
        }
        &:nth-child(n + 2) {
          font-size: 14px;
          color: #666666;
          line-height: 28px;
          text-indent: 2em;
        }
      }
      >ul {
        width: 100%;
        height: 206px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        li {
          width: 387px;
          height: 100%;
          //background-image: linear-gradient(180deg, #FF8C88 0%, #FF0000 100%), linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
          border-radius: 10px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
            transition: opacity .35s linear;
            position: absolute;
            top: 0;
            left: 0;
            &:first-child {
              opacity: 1;
            }
            &:last-child {
              opacity: 0;
            }
          }
          &:hover {
            img:first-child {
              opacity: 0;
            }
            img:last-child {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  div.content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    p.title {
      font-size: 28px;
      color: #000000;
      text-align: center;
      margin-top: 80px;
      margin-bottom: 40px;
    }
    p.subtitle {
      font-size: 14px;
      color: #666666;
      line-height: 28px;
      text-indent: 2em;
      margin-bottom: 60px;
    }
    img {
      display: block;
      width: 974px;
      margin: 0 auto;
    }
  }
  div.softwareDevelopment {
    width: 100%;
    height: 896px;
    position: relative;
    img.bg {
      display: block;
      width: 100%;
      height: 100%;
    }
    div.softwareDevelopmentInner {
      width: 1200px;
      height: 896px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      padding-top: 80px;
      box-sizing: border-box;
      p.title {
        font-size: 28px;
        color: #000000;
        text-align: center;
        margin-bottom: 40px;
      }
      p.detail {
        font-size: 14px;
        color: #666666;
        text-align: justify;
        line-height: 28px;
        margin-bottom: 80px;
        text-indent: 2em;
      }
      >img {
        width: 784px;
        transform: translateX(255px)
      }
      //ul {
      //  width: 1020px;
      //  margin: 0 auto;
      //  display: flex;
      //  justify-content: space-between;
      //  flex-wrap: wrap;
      //  li {
      //    flex-basis: 500px;
      //    height: 166px;
      //    border-radius: 10px;
      //    margin-bottom: 20px;
      //    padding: 40px 40px 0;
      //    box-sizing: border-box;
      //    display: flex;
      //    justify-content: start;
      //    align-items: start;
      //    background: #FFFFFF;
      //    position: relative;
      //    div.linearGradient {
      //      width: 500px;
      //      height: 166px;
      //      border-radius: 10px;
      //      background: linear-gradient(180deg, #FF8C88 0%, #FF0000 100%);
      //      position: absolute;
      //      top: 0;
      //      left: 0;
      //      opacity: 0;
      //      z-index: 1;
      //      transition: all .2s linear;
      //    }
      //    div.img {
      //      width: 64px;
      //      height: 64px;
      //      margin-right: 30px;
      //      position: relative;
      //      z-index: 2;
      //      img {
      //        width: 64px;
      //        height: auto;
      //        display: block;
      //        position: absolute;
      //        top: 0;
      //        left: 0;
      //        &.default {
      //          opacity: 1;
      //        }
      //        &.point {
      //          opacity: 0;
      //        }
      //      }
      //    }
      //    div.description {
      //      position: relative;
      //      z-index: 2;
      //      p:first-child {
      //        font-size: 20px;
      //        color: #000000;
      //        margin-bottom: 10px;
      //      }
      //      p:last-child {
      //        font-size: 14px;
      //        color: #666666;
      //        text-align: justify;
      //        line-height: 28px;
      //        font-weight: 400;
      //      }
      //    }
      //    &:hover {
      //      div.linearGradient {
      //        opacity: 1;
      //      }
      //      div.img {
      //        img {
      //          &.default {
      //            opacity: 0;
      //          }
      //          &.point {
      //            opacity: 1;
      //          }
      //        }
      //      }
      //      div.description {
      //        p {
      //          color: #FFFFFF;
      //        }
      //      }
      //    }
      //  }
      //}
    }
  }
}
</style>
