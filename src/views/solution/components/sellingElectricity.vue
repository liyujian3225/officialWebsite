<template>
  <div class="sellingElectricity">
    <div class="baseInfo">
      <div class="baseInfo_inner">
        <p>售电业务</p>
        <img :src="superiorityImg2" alt="">
<!--        <p>在“碳达峰”、“碳中和”目标的指引下，如何消纳新能源已经成为全社会关注的焦点，电力市场化改革的步伐会一直向前不可逆转，合力创新深耕电力行业近20年，积累了众多电厂电网用户等信息资源，致力于为用户提供更灵活的的用电配方、更低的电价、更优质的售电服务、更贴心的增值服务。</p>-->
      </div>
    </div>
    <div class="superiority">
      <p>选择我们的优势</p>
      <img :src="superiorityImg" alt="">
    </div>
    <div class="baseCard">
      <img class="bg" :src="a4" alt="">
      <div class="baseCard_inner">
        <div
          class="card"
          v-for="(item, index) in baseCardList"
          :key="index"
        >
          <div class="linearGradient"></div>
          <div class="imgBox">
            <img class="icon" :src="item.icon" alt="">
            <img class="iconHover" :src="item['icon-hover']" alt="">
          </div>
          <p class="title">{{ item.title }}</p>
          <p class="subTitle">{{ item.subTitle }}</p>
          <p class="content">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <div class="chainBusiness">
      <p>售电业务链</p>
      <img :src="chainBusinessImg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      superiorityImg: require("@/assets/solution/superiority.png"),
      superiorityImg2: require("@/assets/solution/solutionImg2.png"),
      chainBusinessImg: require("@/assets/solution/chainBusiness.png"),
      a4: require("@/assets/solution/a4.png"),
      baseCardList: [
        {
          title: "专业专注 实力雄厚",
          subTitle: "更灵活的用电配方",
          content: "合力创新在电力交易，政策解读，能源管理领域专业突出，具有“3A级认证售电服务商”资质；团队经验丰富，熟知山西省电力市场交易规则，凭借体制灵活、能动性强、市场反应灵敏的行业优势，为用户量体裁衣，定制个性化用电配方。",
          icon: require("@/assets/solution/c1.png"),
          "icon-hover": require("@/assets/solution/c1-hover.png"),
        },
        {
          title: "资源丰富 广泛合作",
          subTitle: "更低的电价",
          content: "合力创新与山西省电力公司、11个地市公司及各大上游的电厂建立了长期战略合作关系，电量交易规模大，议价能力强；与可再生能源达成战略合作，控制更低的发电成本。",
          icon: require("@/assets/solution/c2.png"),
          "icon-hover": require("@/assets/solution/c2-hover.png"),
        },
        {
          title: "降本增效 规避风险",
          subTitle: "更优质的售电服务",
          content: "合力创新代理用户参与所有交易事项，节约用户聘请专业人员参与市场交易的人工成本；同时，极大程度地降低用户承担的偏差考核风险。合力创新郑重承诺：竭尽所能让用户风险最小化，为用户解决后顾之忧。",
          icon: require("@/assets/solution/c3.png"),
          "icon-hover": require("@/assets/solution/c3-hover.png"),
        },
        {
          title: "服务保障 完善售后",
          subTitle: "更贴心的增值服务",
          content: "除了更低的用电价格、更灵活的交易模式、更优质的售电服务之外，合力创新还为用户提供用电需求侧管理、用电诊断等各项增值服务，为用户的安全监测、高效运维、精细化管理、能效优化保驾护航。",
          icon: require("@/assets/solution/c4.png"),
          "icon-hover": require("@/assets/solution/c4-hover.png"),
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
div.sellingElectricity {
  div.baseInfo {
    width: 100%;
    background: #f1f1f1;
    div.baseInfo_inner {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      p:first-child {
        color: #000000;
        font-size: 28px;
        text-align: center;
        margin: 80px auto 40px;
      }
      img {
        display: block;
        width: 804px;
        margin: 0 auto 20px;
      }
      //p:last-child {
      //  line-height: 28px;
      //  font-size: 14px;
      //  color: #666666;
      //  text-indent: 2em;
      //}
    }
  }
  div.superiority {
    width: 100%;
    height: 778px;
    overflow: hidden;
    p {
      color: #000000;
      font-size: 28px;
      text-align: center;
      margin: 80px auto 60px;
    }
    img {
      display: block;
      margin: 0 auto;
    }
  }
  div.baseCard {
    width: 100%;
    height: 654px;
    position: relative;
    overflow: hidden;
    img.bg {
      display: block;
      width: 100%;
      height: 100%;
    }
    div.baseCard_inner {
      width: 1200px;
      height: 430px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      margin: auto;
      div.card {
        flex-basis: 286px;
        height: 430px;
        background: #FFFFFF;
        border-radius: 4px;
        padding: 30px 20px 0;
        box-sizing: border-box;
        position: relative;
        &:hover {
          div.linearGradient {
            opacity: 1;
          }
          div.imgBox {
            .icon {
              opacity: 0;
            }
            .iconHover {
              opacity: 1;
            }
          }
          p.title, p.subTitle, p.content {
            color: #FFFFFF;
          }
        }
        div.linearGradient {
          width: 286px;
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(180deg, #FF8C88 0%, #FF0000 100%);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 1;
          transition: all .2s linear;
        }
        div.imgBox {
          width: 70px;
          height: 70px;
          margin: 0 auto 20px;
          position: relative;
          z-index: 2;
          img {
            position: absolute;
            top: 0;
            left: 0;
            transition: all .2s linear;
            &.icon {
              opacity: 1;
            }
            &.iconHover {
              opacity: 0;
            }
          }

        }
        p.title {
          font-size: 22px;
          color: #000000;
          text-align: center;
          margin-bottom: 10px;
          position: relative;
          z-index: 2;
        }
        p.subTitle {
          font-size: 18px;
          color: #666666;
          text-align: center;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }
        p.content {
          line-height: 28px;
          font-size: 14px;
          color: #7C7A7A;
          position: relative;
          z-index: 2;
        }
      }
    }
  }
  div.chainBusiness {
    width: 100%;
    height: 725px;
    overflow: hidden;
    p {
      color: #000000;
      font-size: 28px;
      text-align: center;
      margin: 80px auto 60px;
    }
    img {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
