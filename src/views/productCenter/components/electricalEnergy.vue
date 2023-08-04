<template>
  <div class="electricalEnergy">
    <div class="baseInfo">
      <p class="title">产品概述</p>
      <ul>
        <li>
          <img :src="demoImg" alt="">
        </li>
        <li>
          <p> 电力能源综合数字平台致力于为客户提供电力需求侧管理服务，为工业企业、商业企业、楼宇、学校、医院等企业提供可靠、及时准确的安全监控、数字化运维、能耗分析、优化用电等全方位的电力能源管理服务，产品包含全局概况、站点概览、实时监控、火灾预警、智能告警及消息提醒、分析报告、电能质量分析、运维工单、排班管理、统计分析等功能。平台以实时数据采集、监控与分析为基础，结合线下配电巡检、消缺、电气实验，打造互联网线上+线下协同一体的运维模式，形成配电运维全流程闭环管理，实现精准数字化运维，保障用户配电系统安全稳定运行。为用户安全用电、智慧运维、用能优化、电力工程等需求提供专业化的一站式服务。</p>
        </li>
      </ul>
    </div>
    <div class="productPosition">
      <img class="bg" :src="productPositionImage" alt="">
      <div class="productPositionInner">
        <p class="title">产品定位</p>
        <ul class="top">
          <li v-for="(item, index) in productPositionList.slice(0, 2)">
            <div class="linearGradient"></div>
            <div class="img">
              <img class="default" :src="item.img" alt="">
              <img class="point" :src="item.hoverImg" alt="">
            </div>
            <p>{{item.content}}</p>
          </li>
        </ul>
        <ul class="bottom">
          <li v-for="(item, index) in productPositionList.slice(2, 5)">
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
          <li class="article article1">平台已在电力、钢铁、材料、化工、水泥等多个行业成功应用。平台以实时数据采集、监控与分析为基础，通过运行数据全景感知、多样化展示与分析、秒级告警等优势，实现精准化数字运维，保障用户电力系统安全稳定运行。</li>
          <li class="article article2">通过全面的数据监控，实时、准确、详细地掌握每个监测终端的能源消耗数据，据此给出节能减排建议，促进企业能源使用由粗放到精细化管理的转变，提升电力能源使用效率和企业能效管理水平，助力实现碳达峰碳中和目标。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      demoImg: require("@/assets/productCenter/demo1.png"),
      productPositionImage: require("@/assets/productCenter/productPosition.png"),
      productPositionList: [
        {
          content: "平台基于微服务的分布式架构，依托IOT技术，通过MQTT、容器化编排、实时流式计算等技术实现高可用、高吞吐数据采集处理和应用，提供多种终端接入的电力需求侧管理SaaS服务。",
          img: require("@/assets/productCenter/3.png"),
          hoverImg: require("@/assets/productCenter/3-hover.png"),
        },
        {
          content: "平台支持大规模测量终端接入，秒级采集频率，随接入终端的增加，产品可灵活扩容，无需调整架构，大并发下能保证稳定运行，延迟低至毫秒级别。",
          img: require("@/assets/productCenter/7.png"),
          hoverImg: require("@/assets/productCenter/7-hover.png"),
        },
        {
          content: "产品设计规则引擎实现告警逻辑判断，解决告警风暴问题，结合Flink流式计算，实时将告警推送至监控大屏、手机端短信或App，配合自定义的工单流转设计，形成管理闭环。",
          img: require("@/assets/productCenter/5.png"),
          hoverImg: require("@/assets/productCenter/5-hover.png"),
        },
        {
          content: "产品多端联动，官网、手机APP、小程序、公众号应用融合于一体，全面提升产品的易用性和应用体验。",
          img: require("@/assets/productCenter/1.png"),
          hoverImg: require("@/assets/productCenter/1-hover.png"),
        },
        {
          content: "产品通过公安部信息系统安全等级保护三级认证，保障系统安全可靠。",
          img: require("@/assets/productCenter/2.png"),
          hoverImg: require("@/assets/productCenter/2-hover.png"),
        },
      ],
      applyEffectImage: require("@/assets/productCenter/applyEffect1.png"),
    }
  }
}
</script>
<style lang="scss" scoped>
div.electricalEnergy {
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
        }
      }
    }
  }
  div.productPosition {
    width: 100%;
    height: 860px;
    position: relative;
    img.bg {
      display: block;
      width: 100%;
      height: 100%;
    }
    div.productPositionInner {
      width: 1200px;
      height: 860px;
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
      ul {
        display: flex;
        flex-wrap: wrap;
        &.top {
          width: 820px;
          margin: 0 auto 30px;
          transform: translateX(15px);
        }
        &.bottom {
          width: 100%;
        }
        li {
          width: 380px;
          height: 285px;
          margin-right: 30px;
          padding: 40px 30px 0;
          box-sizing: border-box;
          border-radius: 10px;
          background: #FFFFFF;
          position: relative;
          &:first-child {}
          div.linearGradient {
            width: 380px;
            height: 285px;
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
            font-size: 12px;
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
    height: 621px;
    div.applyEffect_inner {
      width: 1200px;
      height: 621px;
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
        height: 366px;
        position: relative;
        li.centerImg {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-320px);
        }
        li.article {
          width: 288px;
          font-size: 14px;
          color: #666666;
          line-height: 28px;
          &.article1 {
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-100px);
          }
          &.article2 {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-100px);
          }
        }
      }
    }
  }
}
</style>
