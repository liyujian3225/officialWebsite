<template>
  <div class="electricalEnergy">
    <div class="baseInfo">
      <div class="baseInfo_inner">
        <p class="detail">电力能源综合服务</p>
        <p class="content">为解决安全用电、能效优化、精细化用电管理问题，合力创新在传统电力建设的基础上，依托物联网技术，研发搭建了电力能源综合服务平台，帮助企业进行技改大修与线上线下的日常托管运维，让用户可以智能用电、安全用电、放心用电，平台目前已经接入200余家山西各地市工商业用户。</p>
      </div>
    </div>
    <div class="solution">
      <p class="title">电力能源综合服务解决方案</p>
      <p class="subtitle">1、电力物联网服务体系</p>
      <p class="content" style="margin-bottom: 0;">为了解决安全用电、能效优化、精细化用电管理问题，研发中心在传统电力建设的基础上，依托物联网技术，研发搭建了电力能源综合服务平台，通过实时智能监测、越限预警、自动抄表、用电数据分析和环境监测分析等线上功能，与线下24小时运维响应、应急抢修、智能改造等功能进行配合，打造真正的“一站式”电力服务平台，同时，平台支持移动终端APP端和Web端随时随地查看用电情况。</p>
      <p class="content">平台通过进行资产管理，降低运营、维护和企业管理成本，提升应急响应速度，提高运维效率，保障配电安全，优化用能全流程，提供优质的售电服务，为用户的安全监测、高效运维、精细化管理、能效优化保驾护航，让用户可以智能用电，安全用电，放心用电。</p>
      <img :src="solutionImg1" alt="">
      <p class="subtitle">2、“一站式”服务</p>
      <p class="content" style="text-align: center;">打造电力能源综合服务“一站式”服务平台，帮助企业省心、省工、省电费。</p>
      <ul>
        <li v-for="(key, value) in serviceName">
          <img :src="serviceBg" alt="">
          <span class="value">{{ value }}</span>
          <span class="key">{{ key }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      solutionImg1: require("@/assets/solution/solutionImg1.png"),
      serviceBg: require("@/assets/solution/bg.png"),
      questionMark: require("@/assets/solution/questionMark.png"),
      serviceName: {
        "A": "售电交易服务",
        "B": "智能变配电（线上+线下）托管运维",
        "C": "智能电力能效优化服务",
        "D": "电力工程检修及试验服务",
        "E": "电力需求侧管理服务",
        "F": "配网投资建设运营服务",
      },
      questionMarkList: [
        {
          title: "用电安全",
          content: [
            "配电室的开启是否得到授权？是否有无关人员进入？",
            "变压器温升是否异常？负载情况如何？",
            "负载电缆是否超载？长期重载运行是否老化漏电？",
            "设备数量多且带电运行，巡检人员能不能无死角巡视到？",
          ]
        },
        {
          title: "能效优化",
          content: [
            "企业不了解电费构成，电费浪费严重，力调电费罚款严重。",
            "电能质量不够稳定，产品质量易受影响设备使用周期短；",
            "耗过程难以精准把控，缺少数据集中对比、分析，节能空间较大；",
            "企业用电非正常损耗过高，损耗情况不了解，损耗原因不明。",
          ]
        },
        {
          title: "精细化管理",
          content: [
            "人工巡检盲区部分是什么情况？巡视效果与人员效率怎样？",
            "无设备台帐及运行履历，无法判断是否需要检修？检修什么？检修到什么程度？",
            "人工抄表花费大量人力，数据误差大，导致用能指标不准确等如何解决？",
            "无历史数据对比分析，能耗情况无法判断，管理人员决策困难、工作量大。",
          ]
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
div.electricalEnergy {
  div.baseInfo {
    width: 100%;
    height: 286px;
    background: #f1f1f1;
    div.baseInfo_inner {
      width: 1200px;
      height: 286px;
      margin: 0 auto;
      overflow: hidden;
      p.detail {
        font-size: 28px;
        color: #000000;
        text-align: center;
        margin: 80px 0 40px;
      }
      p.content {
        line-height: 28px;
        font-size: 14px;
        color: #666666;
        text-indent: 2em;
      }
    }
  }
  div.challenge {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    >p {
      font-size: 28px;
      color: #000000;
      text-align: center;
      margin: 80px auto 60px;
    }
    div.challenge_inner {
      width: 100%;
      height: 550px;
      position: relative;
      img {
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        margin: auto;
      }
      div.singleColumn {
        width: 270px;
        position: absolute;
        &:nth-child(2) {
          top: 16px;
          left: 100px;
        }
        &:nth-child(3) {
          top: 0;
          right: 100px;
        }
        p.title {
          font-size: 22px;
          color: #FF0000;
          text-align: center;
          font-weight: bold;
          margin-bottom: 30px;
        }
        p.content {
          line-height: 22px;
          font-size: 14px;
          color: #666666;
          margin-bottom: 14px;
          &:before {
            content: "";
            display: inline-block;
            margin-right: 8px;
            width: 10px;
            height: 10px;
            background: #BDBDBD;
            border-radius: 50%;
          }
        }
      }
      div.specialSingleColumn {
        width: 560px;
        height: 210px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        p.title {
          font-size: 22px;
          color: #FF0000;
          text-align: center;
          font-weight: bold;
          margin-bottom: 30px;
        }
        ul {
          display: flex;
          justify-content: space-between;
          li {
            flex-basis: 270px;
            p.content {
              line-height: 22px;
              font-size: 14px;
              color: #666666;
              margin-bottom: 14px;
              &:before {
                content: "";
                display: inline-block;
                margin-right: 8px;
                width: 10px;
                height: 10px;
                background: #BDBDBD;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
  div.solution {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    p.title {
      font-size: 26px;
      color: #000000;
      text-align: center;
      margin: 80px auto 60px;
    }
    p.subtitle {
      font-size: 22px;
      color: #000000;
      text-align: center;
      margin-bottom: 60px;
    }
    p.content {
      line-height: 28px;
      font-size: 14px;
      color: #666666;
      text-indent: 2em;
      margin-bottom: 60px;
      text-align: justify;
    }
    >img {
      display: block;
      margin: 0 auto 80px;
    }
    ul {
      width: 100%;
      height: 136px;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 80px;
      li {
        width: 382px;
        height: 58px;
        margin: 0 26px 20px 0;
        position: relative;
        &:nth-child(3n) {
          margin-right: 0;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          height: 100%;
        }
        span.value {
          position: absolute;
          top: 50%;
          left: 9px;
          z-index: 1;
          font-size: 16px;
          color: #ffffff;
          transform: translateY(-50%);
        }
        span.key {
          position: absolute;
          top: 50%;
          left: 48px;
          z-index: 1;
          font-size: 16px;
          color: #666666;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
