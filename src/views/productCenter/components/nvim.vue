<template>
  <div class="nvim">
    <div class="baseInfo">
      <p class="title">产品概述</p>
      <ul>
        <li>
          <img :src="demoImg" alt="">
        </li>
        <li>
          <p>NVIM网络可视化智慧管理平台是面向电力调度数据网络的专用管理系统，秉承统筹规划、统一标准、分级管理的原则进行整体设计，依据网管国际规范实现故障管理、配置管理、性能管理、安全管理等常规功能，并在满足调度数据网日常运维管理需求的基础上，结合国家电力调度数据网的网络设计，深度定制运行全景监视、设备智能纳管、资产数字管理、业务智能巡检、网络安全管理等功能，满足对调度数据网内所有路由器、交换设备的一体化监控管理。</p>
          <p>系统解决了网络、业务、硬件设备从无感到可视的数字化转变，实现对所有设备运行、性能的全局把控，提高对网络隐患定位和故障排查的及时有效性，提升调度数据网在电网公司创新转型发展过程的关键支撑水平。</p>
        </li>
      </ul>
    </div>
    <div class="productPosition">
      <img class="bg" :src="productPositionImage" alt="">
      <div class="productPositionInner">
        <p class="title">产品定位</p>
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
          <li class="article article1">极大提高调度自动化及通信网管理人员工作效率，缩短故障排查和处理时间，使管理具备高度灵活性、稳定性、高效性，有效保障电力系统的安全稳定运行，前瞻性地对电网设备科学管理和规划提供决策依据。</li>
          <li class="article article2">系统服务于能源转型中的数字化电网建设，解决新型电力系统中错综复杂的调度自动化及通信网络管理难题，全方位推动低碳、清洁、高效、经济的电网建设和发展，助力“双碳”目标的实现，在未来绿色电网的发展中具有巨大的应用潜力和广泛的市场前景。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      demoImg: require("@/assets/productCenter/demo.png"),
      productPositionImage: require("@/assets/productCenter/productPosition.png"),
      productPositionList: [
        {
          content: "以全栈国产化为基础环境，全面适配国产服务器、操作系统、数据库，改善国家电网网管软件国产化欠缺的现状，是国内第一套适配国产化环境的网管产品。",
          img: require("@/assets/productCenter/1.png"),
          hoverImg: require("@/assets/productCenter/1-hover.png"),
        },
        {
          content: "已通过《国家电网公司应用软件系统通用安全要求》增强型（三级）安全认证，实现国密算法对数据加密传输、敏感数据加密储存、敏感数据备份、最小授权管理等，保障系统的安全性。",
          img: require("@/assets/productCenter/2.png"),
          hoverImg: require("@/assets/productCenter/2-hover.png"),
        },
        {
          content: "采用微服务架构的模块化设计，满足功能模块的横向扩展和平行扩容，灵活适配各种业务场景。",
          img: require("@/assets/productCenter/3.png"),
          hoverImg: require("@/assets/productCenter/3-hover.png"),
        },
        {
          content: "适配华为、华三、中兴等各厂商设备的综合监控能力。",
          img: require("@/assets/productCenter/4.png"),
          hoverImg: require("@/assets/productCenter/4-hover.png"),
        },
        {
          content: "突破大数据量的高频采集、拓扑自动发现等核心技术。",
          img: require("@/assets/productCenter/5.png"),
          hoverImg: require("@/assets/productCenter/5-hover.png"),
        },
        {
          content: "实现国调定期收资、合规性巡检等电力行业深度定制功能。",
          img: require("@/assets/productCenter/6.png"),
          hoverImg: require("@/assets/productCenter/6-hover.png"),
        },
      ],
      applyEffectImage: require("@/assets/productCenter/applyEffect.png"),
    }
  }
}
</script>
<style lang="scss" scoped>
div.nvim {
  div.baseInfo {
    width: 1200px;
    height: 578px;
    margin: 0 auto;
    padding: 80px 0;
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
    height: 856px;
    position: relative;
    img.bg {
      display: block;
      width: 100%;
      height: 100%;
    }
    div.productPositionInner {
      width: 1200px;
      height: 856px;
      padding: 80px 0;
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
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 380px;
          height: 286px;
          margin-right: 30px;
          margin-bottom: 30px;
          padding: 40px 30px 0;
          box-sizing: border-box;
          border-radius: 10px;
          background: #FFFFFF;
          position: relative;
          div.linearGradient {
            width: 380px;
            height: 286px;
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
            text-align: justify;
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
          &:nth-child(3n) {
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
    height: 634px;
    div.applyEffect_inner {
      width: 1200px;
      height: 634px;
      margin: 0 auto;
      padding-top: 80px;
      box-sizing: border-box;
      p {
        font-size: 28px;
        color: #000000;
        text-align: center;
        margin-bottom: 30px;
      }
      ul {
        width: 100%;
        height: 424px;
        position: relative;
        li.centerImg {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-320px);
        }
        li.article {
          width: 288px;
          font-size: 14px;
          color: #666666;
          line-height: 28px;
          text-align: justify;
          &.article1 {
            position: absolute;
            left: 20px;
            top: 60px;
          }
          &.article2 {
            position: absolute;
            right: 40px;
            top: 60px;
          }
        }
      }
    }
  }
}
</style>
