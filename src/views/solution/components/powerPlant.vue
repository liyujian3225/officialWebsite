<template>
  <div class="powerPlant">
    <div class="baseInfo">
      <div class="baseInfo_inner">
        <p>发电业务</p>
        <p>在“碳达峰和碳中和”的背景下，新能源成为推动可持续发展的重要力量。新型电力系统以新能源为主体，将发挥关键作用。随着全球对气候变化和环境问题的关注日益增加，传统的化石燃料能源逐渐失去可持续性和环保性。相比之下，太阳能、风能、水能等新能源具有取之不竭、低碳无污染等优势，因此备受关注。</p>
        <p>我们的系统集成业务涵盖了新能源发电厂的多个方面，包括二次业务系统建设、集控中心建设、一、二次总包建设、二次系统升级改造以及新能源场站的深度运维服务。通过系统集成，我们为客户提供全面的解决方案，帮助他们实现电力系统的高效运营和管理。</p>
        <p>在电厂二次业务系统建设方面，我们致力于构建先进的监控和管理系统，确保电力设备运行安全可靠。针对新能源场站，我们提供集控中心建设服务，将分布式能源资源进行集中管理，实现优化调度和灵活控制。</p>
        <p>此外，我们提供新能源场站的一、二次总包建设，确保项目从规划到交付的顺利进行。</p>
        <p>除了建设阶段，我们也专注于新能源场站的深度运维服务，利用先进技术，通过远程监测、故障诊断和预测分析，我们能够及时响应和处理问题，确保发电系统的稳定运行，为企业降本增效。</p>
        <p>我们致力于为客户提供整合优势资源、创新技术与服务的系统集成解决方案，以推动发电厂业务在信息-物理-社会视角下的可持续发展。</p>
      </div>
    </div>
    <div class="baseContent">
      <div class="baseContent_inner">
        <p>电厂二次系统业务</p>
        <ul>
          <li
            v-for="(item, index) in systemList"
            :key="index">
            <div class="imgBox">
              <img :src="item.icon" alt="">
            </div>
            <p class="title">{{ item.title }}</p>
            <p class="content" v-for="j in item.p">{{ j }}</p>
          </li>
        </ul>
        <p style="font-size: 28px">集控中心建设</p>
        <p class="subtitle">远程实时监控、智能运营管控，实现远程集中值班、现场少人值守的高效一体化管理模式。</p>
        <img :src="illustration" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      systemList: [
        {
          title: "调度自动化系统",
          icon: require("@/assets/solution/b1.svg"),
          p: [
            "电厂调度自动化系统包含：调度数据网系统、有功和无功功率控制系统(AGC/AVC)、同步相量测量系统(PMU)、时钟同步系统(GPS)、不间断电源系统(UPS)、优化调度及双细则考核系统(OPS)、调度生产管理系统(OMS)、厂站网络安全监测系统、杀毒软件系统、风/光电功率预测系统、电能质量在线监测、电能量采集系统。",
            "其中国家电网调度数据网(SGDnet)是为电力调度生产服务的专用数据网络，是实现各级调度中心之间及调度中心与电厂之间实时生产数据传输和交换的基础设施，是实现应急支持和备用调度功能不可或缺的支撑平台。",
          ]
        },
        {
          title: "综合自动化系统",
          icon: require("@/assets/solution/b2.svg"),
          p: [
            "综合自动化系统包含：变电站计算机监控系统、主变保护系统、母线保护系统、五防系统、线路光差保护系统、主变故录系统、保护及故障信息管理系统子站系统、直流高频开关电源系统、SF6泄漏报警系统。",
            "其中变电站计算机监控系统包括两部分：站控层和间隔层，网络结构为开放式分层、分布式结构。站控层为全所设备监视、测量、控制、管理的中心，与间隔层相连。间隔层以相对独立的方式集中布置在继电器室及开关室中，在站控层及网络失效的情况下，间隔层仍能独立完成间隔层的监测和断路器控制功能。",
          ]
        },
        {
          title: "通信系统",
          icon: require("@/assets/solution/b3.svg"),
          p: [
            "通信系统包含：通信传输系统(SDH)、通信PCM系统、调度程控交换系统、综合数据网系统、通信高频开关电源、视频会议系统。",
            "电厂SDH传输系统主要承载电厂继电保护、安全自动装置、自动化和调度电话等重要生产业务，是保障电网安全运行、支撑智能电网建设的重要基础。PCM用于提供数字复接和语音调度通道，与电力通信各系统的主站设备信息交互，满足通信端信息采集内容、采集精度、实时性、可靠性、通信方式、规约要求。调度程控交换机数字调度系统，构造灵活、功能多样，为全数字时分制交换机，具有无阻塞交换网络，系统具有良好的可扩展性。",
          ]
        },
        {
          title: "安防系统",
          icon: require("@/assets/solution/b4.svg"),
          p: [
            "电厂侧安防系统关系到电厂的安全、稳定生产、人员及财产安全，主要包含：火灾自动报警系统、视频监控系统、电子围栏、红外对射系统。",
            "其中火灾报警系统与站内消防协调联动，涉及站内高压室、低压室、继保室、操作室、蓄电池室的温感、烟感报警、室内的排烟和排气联动。视频监控系统主要涉及全站各小室、主控室、站内变站区、站内全景、站外围墙区域的监控，实现站内全方位、各区域无死角视频监控。电子围栏、红外对射主要部署于变电站围墙部分，实现变电站全站的安全防护、报警。",
          ]
        },
      ],
      illustration: require("@/assets/solution/illustration.png")
    }
  }
}
</script>
<style lang="scss" scoped>
div.powerPlant {
  div.baseInfo {
    width: 100%;
    height: 518px;
    background: #f1f1f1;
    div.baseInfo_inner {
      width: 1200px;
      height: 518px;
      margin: 0 auto;
      overflow: hidden;
      p:first-child {
        font-size: 28px;
        color: #000000;
        text-align: center;
        margin: 80px 0 40px;
      }
      p:nth-child(n+2) {
        font-size: 14px;
        color: #666666;
        line-height: 28px;
        text-indent: 2em;
      }
    }
  }
  div.baseContent {
    div.baseContent_inner {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      >p {
        font-size: 28px;
        color: #000000;
        text-align: center;
        margin: 80px 0 60px;
      }
      >p.subtitle {
        font-size: 14px;
        color: #666666;
        text-align: center;
        margin: 0 0 60px;
      }
      >img {
        display: block;
        width: 80%;
        margin: 0 auto 80px;
      }
      >ul {
        width: 100%;
        height: 505px;
        display: flex;
        justify-content: space-between;
        li {
          flex-basis: 255px;
          height: 100%;
          div.imgBox {
            width: 78px;
            height: 63px;
            margin: 0 auto;
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          p.title {
            font-size: 22px;
            color: #000000;
            text-align: center;
            margin-bottom: 22px;
          }
          p.content {
            font-size: 14px;
            color: #666666;
            line-height: 24px;
            text-indent: 2em;
            text-align: justify
          }
        }
      }
    }
  }
}
</style>
