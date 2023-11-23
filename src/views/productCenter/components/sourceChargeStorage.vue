<template>
  <div class="sourceChargeStorage">
    <div class="baseInfo">
      <p class="title">产品概述</p>
      <ul>
        <li>
          <img :src="demoImg" alt="">
        </li>
        <li>
          <p>在国网公司数字化转型发展的形势下，国网山西电科院作为国网山西省电力公司科技创新的主体，肩负着加快科技创新的巨大任务和挑战。在深刻认识国网公司数字化转型理念，把握电科院核心业务的前提下，打造源荷储涉网实验报名分析平台。平台面向新能源场站、储能、电动汽车、电气化铁路等检测对象，按照国家标准、行业要求开展动态无功补偿装置性能测试、电能质量测试、功率调节能力测试等涉网试验，一体化实现其并网测试工作的数据分析和报告生成过程，同时支持多类型便携式测试设备、多样试验报告，解决原始数据处理工作量大、分析过程繁杂、结果挖掘及关联分析等问题，提高测试全过程的智能化水平。</p>
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
          <li class="article article1">平台实现新能源场站4类22小项涉网试验数据分析和报告生成，每份报告的平均生成时间由传统人工编制的2～3个工作日缩减为4小时，提高新能源场站涉网试验检测过程的自动化水平，提升了试验管理的规范性，提高了检测工作效率，可向国网范围内其他电科院推广应用。</li>
          <li class="article article2">平台是国网山西电科院数字化实效转型成功的典型案例之一，从建设、上线、推广应用，国网山西电科院负责项目领导及基层深度参与，从组织保障、业务研讨、技术创新等多层面实现数字化战略转型。切实提高新能源场站涉网试验检测过程的数字化自动化水平，实现了国网山西电科院向数字化转型的第一步迈进。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      demoImg: require("@/assets/productCenter/demo2.png"),
      productPositionImage: require("@/assets/productCenter/productPosition.png"),
      productPositionList: [
        {
          content: "利用自动化技术完成文件远程传输、解析运算及自动生成报告，提升工作效率。",
          img: require("@/assets/productCenter/8.png"),
          hoverImg: require("@/assets/productCenter/8-hover.png"),
        },
        {
          content: "利用智能化技术完成测试过程智能化管理，提升管理水平。",
          img: require("@/assets/productCenter/9.png"),
          hoverImg: require("@/assets/productCenter/9-hover.png"),
        },
        {
          content: "利用数字化技术完成试验数据的标准化与结构化，提升数据价值。",
          img: require("@/assets/productCenter/10.png"),
          hoverImg: require("@/assets/productCenter/10-hover.png"),
        },
      ],
      applyEffectImage: require("@/assets/productCenter/applyEffect2.png"),
    }
  }
}
</script>
<style lang="scss" scoped>
div.sourceChargeStorage {
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
    height: 485px;
    overflow-y: hidden;
    position: relative;
    img.bg {
      display: block;
      width: 100%;
    }
    div.productPositionInner {
      width: 1200px;
      height: 485px;
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
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 380px;
          height: 230px;
          margin-right: 30px;
          padding: 40px 30px 0;
          box-sizing: border-box;
          border-radius: 10px;
          background: #FFFFFF;
          position: relative;
          div.linearGradient {
            width: 380px;
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
    height: 536px;
    div.applyEffect_inner {
      width: 1200px;
      height: 536px;
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
        height: 489px;
        position: relative;
        li.centerImg {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-600px);
        }
        li.article {
          width: 288px;
          font-size: 14px;
          color: #666666;
          line-height: 28px;
          &.article1 {
            position: absolute;
            left: 80px;
            top: 10px;
          }
          &.article2 {
            position: absolute;
            right: 75px;
            top: 10px;
          }
        }
      }
    }
  }
}
</style>
