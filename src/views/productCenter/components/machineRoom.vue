<template>
  <div class="machineRoom">
    <div class="baseInfo">
      <p class="title">产品概述</p>
      <ul>
        <li>
          <img :src="demoImg" alt="">
        </li>
        <li>
          <p> DVIM数据中心可视化智慧管理平台以100%国产化为安全准则，全面实现平台环境包括服务器、操作系统、数据库的国产化，结合调控中心的监控运维现状，实现对电力调控数据中心的所有监控对象的统一监控，集中管理。通过对调度自动化I/II/III区机房的各安全区域内的对象进行分区采集，并通过网闸实现一体化监控，可实现对各种监控对象监控指标的自定义全局监控，并在监控过程中不断优化监控方式。</p>
        </li>
      </ul>
    </div>
    <div class="productPosition">
      <img class="bg" :src="productPositionImage" alt="">
      <div class="productPositionInner">
        <p class="title">产品定位</p>
        <p class="description">机房一体化智慧监控管理平台致力于打造一套机房设备及其链路资源管控，性能采集，运行状态监测等全方位于一体的监控管理系统。</p>
        <ul>
          <li v-for="(item, index) in productPositionList">
            <div class="linearGradient"></div>
            <div class="img">
              <img class="default" :src="item.img" alt="">
              <img class="point" :src="item.hoverImg" alt="">
            </div>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="applyEffect">
      <div class="applyEffect_inner">
        <p class="title">应用效果</p>
        <ul>
          <li class="centerImg">
            <img :src="applyEffectImage" alt="">
          </li>
          <li class="article article1">平台可满足对调控数据中心内所有基础资源状态数据的实时监控，被监控基础资源包括服务器、网络设备、操作系统、数据库等，从而满足故障快速定位，缩短故障响应时间，提升运维效率；实现监控工作自动化、精细化管理，以及事件可追溯管理；从各个方面对调度自动化机房的监控对象进行实时监测和管理，包括可用性、性能和业务分析等。平台提供的运行状况监测模块，可帮助管理员在第一时间发现基础资源基本性能的状态异常，并协助管理员对异常做出处理。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      demoImg: require("@/assets/productCenter/demo3.png"),
      productPositionImage: require("@/assets/productCenter/productPosition.png"),
      productPositionList: [
        {
          content: "以全栈国产化为基础环境，全面适配国产服务器、操作系统、数据库，改善国家电网机房监控软件国产化欠缺的现状。",
          img: require("@/assets/productCenter/1.png"),
          hoverImg: require("@/assets/productCenter/1-hover.png"),
        },
        {
          content: "采用微服务架构的模块化设计，满足功能模块的横向扩展和平行扩容，灵活适配各种业务场景。",
          img: require("@/assets/productCenter/3.png"),
          hoverImg: require("@/assets/productCenter/3-hover.png"),
        },
        {
          content: "适配支持不同品牌不同类型设备厂商设备的综合监控能力。",
          img: require("@/assets/productCenter/11.png"),
          hoverImg: require("@/assets/productCenter/11-hover.png"),
        },
        {
          content: "基于机房现状深度定制。",
          img: require("@/assets/productCenter/12.png"),
          hoverImg: require("@/assets/productCenter/12-hover.png"),
        },
      ],
      applyEffectImage: require("@/assets/productCenter/applyEffect3.png"),
    }
  }
}
</script>
<style lang="scss" scoped>
div.machineRoom {
  div.baseInfo {
    width: 1200px;
    height: 578px;
    margin: 0 auto;
    padding-top: 80px;
    box-sizing: border-box;
    p.title {
      font-size: 28px;
      color: #000000;
      text-align: center;
      margin-bottom: 60px;
    }
    ul {
      width: 100%;
      height: 328px;
      display: flex;
      justify-content: space-between;
      li:first-child {
        width: 554px;
        height: 328px;
        border-radius: 20px;
        box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2);
        background: #FFFFFF;
        padding: 20px;
        box-sizing: border-box;
        img {
          display: block;
          width: 100%;
        }
      }
      li:last-child {
        width: 547px;
        height: 328px;
        padding-top: 30px;
        box-sizing: border-box;
        P {
          line-height: 25px;
          font-size: 14px;
          color: #666666;
          text-indent: 2em;
          text-align: justify;
        }
      }
    }
  }
  div.productPosition {
    width: 100%;
    height: 824px;
    position: relative;
    img.bg {
      display: block;
      width: 100%;
      height: 100%;
    }
    div.productPositionInner {
      width: 1200px;
      height: 824px;
      padding-top: 80px;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      p.title {
        font-size: 28px;
        color: #000000;
        font-weight: 400;
        text-align: center;
        margin-bottom: 60px;
      }
      p.description {
        font-size: 14px;
        color: #666666;
        text-align: center;
        margin-bottom: 60px;
      }
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 585px;
          height: 230px;
          margin-right: 30px;
          margin-bottom: 30px;
          padding: 40px 30px 0;
          box-sizing: border-box;
          border-radius: 10px;
          background: #FFFFFF;
          position: relative;
          div.linearGradient {
            width: 585px;
            height: 230px;
            border-radius: 10px;
            background: linear-gradient(180deg, #FF8C88 0%, #FF0000 100%);
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: 1;
            transition: all .2s linear;
          }
          p {
            font-size: 14px;
            color: #666666;
            line-height: 28px;
            transition: all .35s linear;
            position: relative;
            z-index: 2;
          }
          div.img {
            width: 64px;
            height: 64px;
            margin-bottom: 36px;
            position: relative;
            z-index: 2;
            img {
              width: 64px;
              height: auto;
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              transition: all .35s linear;
              &.default {
                opacity: 1;
              }
              &.point {
                opacity: 0;
              }
            }
          }
          &:nth-child(2n) {
            margin-right: 0;
          }
          &:hover {
            div.linearGradient {
              opacity: 1;
            }
            p {
              color: #FFFFFF;
            }
            div.img {
              img {
                &.default {
                  opacity: 0;
                }
                &.point {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }
  div.applyEffect {
    width: 100%;
    height: 607px;
    div.applyEffect_inner {
      width: 1200px;
      height: 607px;
      margin: 0 auto;
      padding-top: 80px;
      box-sizing: border-box;
      p {
        font-size: 28px;
        color: #000000;
        text-align: center;
        margin-bottom: 60px;
      }
      ul {
        width: 100%;
        height: 352px;
        position: relative;
        li.centerImg {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-180px);
        }
        li.article {
          width: 288px;
          font-size: 14px;
          color: #666666;
          line-height: 28px;
          &.article1 {
            position: absolute;
            left: 80px;
            top: 0;
            text-align: justify;
          }
        }
      }
    }
  }
}
</style>
