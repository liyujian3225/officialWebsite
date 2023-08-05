<template>
  <div class="home">
    <el-carousel class="bannerBlock" arrow="never" :height="imgHeight + 'px'">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <div class="carousel-card">
          <img ref="img" :src="item.bannerImg" alt="">
          <div class="description">
            <p class="bigTxt">HELI</p>
            <p class="bigTxt">INNOVATION</p>
            <div class="line"></div>
            <p class="defaultTxt" v-for="txt in item.officialDocuments">{{ txt }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="companyProfile" id="companyProfile">
      <div class="companyProfile_inner">
        <p class="title">企业简介</p>
        <p class="paragraph">山西合力创新科技股份有限公司成立于2005年【股票代码871229】，是一家从事电力行业专业软件研发、ICT 信息化系统集成、电力能源综合服务、运维服务产品化的高新技术企业。公司致力于为电力行业发、输、配、售、用全产业链条相关专业提供专业的系统解决方案及咨询、运维服务。</p>
        <p class="paragraph">公司自成立以来，秉承“至诚专业”的企业精神，扎根山西，聚焦电力，为国家电网山西省公司及200+发电企业提供了系统集成、建设、运维及咨询等服务。公司多年来持续深耕电力行业，自主研发搭建了山西省电力调度省、地一体化综合智能数据网监控及管理服务平台，为山西电网的建设和安全运行提供了强有力的支撑和保障；公司研发的电网技术中心数字化平台，为国网山西省电科院省公司的各类支撑工作及新能源技术服务实现跨专业、跨业务的高效协作保驾护航，增强了国网山西省电科院的科技管理及创新能力；为国网山西省运检开发的基于增强现实（AR)技术的移动运检系统，提升了变电站运检作业的智能化水平。</p>
      </div>
    </div>
    <div class="companyAnalysis">
      <ul>
        <li v-for="(item, index) in companyAnalysisList" :key="index">
          <div class="top">
            <span class="value">{{item.value}}</span>
            <span class="num">{{item.num}}</span>
          </div>
          <div class="bottom">
            <span>{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="map" id="map">
      <div class="map_inner">
        <p>区域布局</p>
        <map-chart class="map"/>
      </div>
    </div>
    <div class="developmentHistory" id="developmentHistory">
      <div class="developmentHistory_inner">
        <p>发展历程</p>
        <ul>
          <li class="article1">
            <div class="imgContain h1Img">
              <img :src="h1Img" alt="">
            </div>
            <div class="article">
              <p>
                <span class="title">深耕求创新</span>
                <span class="rangeYear">2016-2020</span>
              </p>
              <p>
                <span class="year">2017年</span>
                <span class="content">挂牌新三板，业务领域聚焦电力</span>
              </p>
              <p>
                <span class="year">2019年</span>
                <span class="content">具有自主知识产权的“电力能源综合服务数字化平台”正式上线</span>
              </p>
              <p>
                <span class="year">2020年</span>
                <span class="content">荣获“省级专精特新小巨人企业”称号</span>
              </p>
            </div>
            <div class="imgContain h3Img">
              <img :src="h3Img" alt="">
            </div>
            <div class="article">
              <p>
                <span class="title">探索打基础</span>
                <span class="rangeYear">2005-2009</span>
              </p>
              <p>
                <span class="year">2005年</span>
                <span class="content">公司成立</span>
              </p>
              <p>
                <span class="year">2007年</span>
                <span class="content">首次通过ISO9001质量管理体系认证</span>
                <br />
                <span class="content">获得信息系统集成及服务叁级认证</span>
              </p>
            </div>
          </li>
          <li class="center">
            <img :src="hLineImg" alt="">
          </li>
          <li class="article2">
            <div class="article topArticle">
              <p>
                <span class="rangeYear">2021—</span>
                <span class="title">合力创未来</span>
              </p>
              <p>
                <span class="year">2021年</span>
                <span class="content">入选“新三板“创新层</span>
              </p>
              <p>
                <span class="year">2021年</span>
                <span class="content">荣获“国家级专精特新小巨人企业”称号</span>
              </p>
              <p>
                <span class="year">2021年</span>
                <span class="content">公司技术中心评定为“省级企业技术中心”</span>
              </p>
              <p>
                <span class="year">2022年</span>
                <span class="content">自主研发的“Σ电力交易系统”正式上线</span>
              </p>
              <p>
                <span class="year">2022年</span>
                <span class="content">自主研发项目荣获山西省科技进步三等奖</span>
              </p>
            </div>
            <div class="imgContain h2Img">
              <img :src="h2Img" alt="">
            </div>
            <div class="article">
              <p>
                <span class="rangeYear">2010-2015</span>
                <span class="title">接力再发展</span>
              </p>
              <p>
                <span class="year">2010年</span>
                <span class="content">获得软件企业认定，获得信息系统集成及服务能力贰级认证</span>
              </p>
              <p>
                <span class="year">2011年</span>
                <span class="content">高新技术企业认定，自主研发体系建成</span>
              </p>
              <p>
                <span class="year">2012年</span>
                <span class="content">成功挂牌“太原市市级企业技术中心</span>
              </p>
            </div>
            <div class="imgContain h4Img">
              <img :src="h4Img" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="honorQualification" id="honorQualification">
      <div class="honorQualification_inner">
        <p>荣誉资质</p>
        <p>荣誉见证实力，创新推动发展。合力创新深耕于电力行业，迄今为止已斩获数百个奖项及专利、软著权，在技术、创新等各个领域都得到权威机构的认可。</p>
        <el-carousel arrow="never" height="280px">
          <el-carousel-item v-for="(item, index) in honorQualificationList" :key="index">
            <ul class="carousel-ul">
              <li v-for="(jItem, jIndex) in item">
                <span>{{jItem}}</span>
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="cooperativeClient" id="cooperativeClient">
      <div class="cooperativeClient_inner">
        <p>合作客户</p>
        <ul>
          <li v-for="item in cooperativeClientList">
            <img :src="item" alt="">
            <span class="line"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import mapChart from "./components/chinaMap"
export default {
  components: { mapChart },
  data() {
    const cooperativeClientList = () => {
      let list = [];
      for(let i = 0; i < 31; i++) {
        list.push(require("@/assets/home/c" + i + ".png"))
      }
      return list;
    }
    return {
      anchorPoint: this.$route.query.anchorPoint,
      imgHeight: 0,
      bannerList: [
        {
          bannerImg: require("@/assets/home/banner1.png"),
          officialDocuments: [
            "聚焦电力领域",
            "创新未来服务",
          ]
        },
        {
          bannerImg: require("@/assets/home/banner2.png"),
          officialDocuments: [
            "数据重塑能源",
            "科技演绎未来",
          ]
        },
        {
          bannerImg: require("@/assets/home/banner3.png"),
          officialDocuments: [
            "打造优质能源服务",
            "承担未来电力责任",
          ]
        }
      ],
      companyAnalysisList: [
        { name: "为发电企业提供服务", value: 200, num: "+" },
        { name: "荣誉资质", value: 120, num: "项" },
        { name: "发展历程", value: 18, num: "年" },
        { name: "打造“一站式”服务平台", value: 1, num: "站" },
      ],
      hLineImg: require("@/assets/home/hline.png"),
      h1Img: require("@/assets/home/h1.png"),
      h2Img: require("@/assets/home/h2.png"),
      h3Img: require("@/assets/home/h3.png"),
      h4Img: require("@/assets/home/h4.png"),
      honorQualificationList: [
        [
          '国家级专精特新“小巨人”企业', '山西省省级企业技术中心', "CMMI软件能力成熟度3级",
          'ITSS信息技术服务运行维护服务能力成熟度2级', 'DCMM数据管理能力成熟度2级', "高新技术企业",
          '优秀综合能源售电服务商', 'A级纳税信用企业', '“AAA”级售电服务商',
        ],
        [
          '电力需求侧管理服务能力二级', "山西省专精特新“小巨人”企业", '山西省高新技术企业',
          '山西省“四新”中小企业', "电子与智能化工程专业承包贰级证书", '“守合同重信用”企业',
          '年度诚信企业', '承装（修、试）电力设施许可证', '山西省安全技术防范资质壹级',
        ],
        [
          '输变电工程专业承包贰级资质', 'ISO45001职业健康体系认证', 'ISO27001信息安全管理证书',
          'ISO20000信息技术服务证书', 'ISO14001环境管理体系认证', 'ISO9000质量管理体系',
          'CCRC-信息系统安全运维服务资质三级', 'CCRC-信息系统安全集成服务资质三级', '山西省科技进步三等奖',
        ],
      ],
      cooperativeClientList: cooperativeClientList(),
    }
  },
  mounted() {
    if(this.anchorPoint) this.handleScroll(this.anchorPoint);
    this.imgLoad();
    // 监听窗口变化，使得轮播图高度自适应图片高度
    window.addEventListener("resize", () => {
      if (this.$refs.img[0]) {
        this.imgHeight = this.$refs.img[0].height;
      }
    });
  },
  methods: {
    handleScroll(id) {
      const element = document.getElementById(id);
      element.scrollIntoView();
    },
    imgLoad() {
      this.$nextTick(function () {
        // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
        this.imgHeight = (document.body.clientWidth * 1) / 2;
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.imgHeight = this.$refs.img[0].height;
    });
  },
}
</script>
<style lang="scss" scoped>
div.home {
  .carousel-card {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
    div.description {
      width: 1200px;
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      margin: auto;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p.bigTxt {
        color: rgba(255, 255, 255, 0.8);
        font-size: 100px;
        font-weight: bold;
        letter-spacing: 15px;
      }
      div.line {
        width: 216px;
        height: 10px;
        margin: 48px 0 58px;
        background: #FF0000;
      }
      p.defaultTxt {
        height: 53px;
        line-height: 53px;
        margin-bottom: 14px;
        font-size: 40px;
        color: #FFFFFF;
        letter-spacing: 10px;
      }
    }
  }
  >.bannerBlock {
    ::v-deep {
      .el-carousel__indicators {
        bottom: 40px;
        left: 171px;
        transform: translateX(0);
        .el-carousel__indicator {
          width: 15px;
          height: 5px;
          margin-right: 10px;
          padding: 0;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.2);
          transition: width .3s linear;
          &.is-active {
            width: 43px;
            background: #FFFFFF;
          }
          .el-carousel__button {
            display: none;
          }
        }
      }
    }
  }
  >div.companyProfile {
    width: 100%;
    height: 418px;
    background: #f1f1f1;
    div.companyProfile_inner {
      width: 1180px;
      height: 100%;
      margin: 0 auto;
      padding-top: 80px;
      box-sizing: border-box;
      p.title {
        font-size: 28px;
        color: #000000;
        line-height: 30px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 40px;
      }
      p.paragraph {
        font-size: 14px;
        color: #666666;
        line-height: 28px;
        font-weight: 400;
        text-indent: 2em;

        text-align: justify;

        &:nth-child(2) {
          margin-bottom: 20px;
        }
      }
    }
  }
  >div.companyAnalysis {
    width: 100%;
    height: 224px;
    background: #f9f9f9;
    ul {
      width: 1060px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 60px 0;
      box-sizing: border-box;
      li {
        position: relative;
        &:nth-child(-n + 3) {
          margin-right: 70px;
          padding-right: 70px;
          &:after {
            width: 1px;
            height: 80px;
            border-right: 1px solid #e5e5e5;
            content: "";
            position: absolute;
            right: 0;
            top: 20px;
          }
        }
        &:first-child {
          span.num {
            font-size: 30px !important;
          }
        }
        div.top {
          text-align: center;
          margin-bottom: 10px;
          span.value {
            font-size: 70px;
            color: #FF0000;
            font-weight: 400;
            margin-right: 10px;
          }
          span.num {
            font-size: 20px;
            color: #FF0000;
            font-weight: 400;
          }
        }
        div.bottom {
          text-align: center;
          span {
            font-size: 16px;
            color: #666666;
            font-weight: 400;
          }
        }
      }
    }
  }
  >div.map {
    width: 100%;
    height: 1164px;
    background: #ffffff;
    >div.map_inner {
      height: 100%;
      padding-top: 80px;
      box-sizing: border-box;
      p {
        text-align: center;
        font-size: 28px;
        color: #000000;
        line-height: 30px;
        font-weight: 400;
      }
      div.map {
        margin: 0 auto;
        margin-top: -33px;
      }
    }
  }
  >div.developmentHistory {
    width: 100%;
    height: 1244px;
    background: #f9f9f9;
    >div.developmentHistory_inner {
      width: 1200px;
      height: 100%;
      padding-top: 80px;
      box-sizing: border-box;
      margin: 0 auto;
      >p {
        text-align: center;
        font-size: 28px;
        color: #000000;
        line-height: 30px;
        font-weight: 400;
        margin-bottom: 60px;
      }
      >ul {
        width: 1170px;
        height: 990px;
        display: flex;
        align-items: start;
        justify-content: center;
        li.center {
          width: 50px;
          height: 990px;
          margin: 0 30px;
          img {
            display: block;
          }
        }
        li.article1 {
          display: flex;
          flex-direction: column;
          align-items: end;
          div.imgContain {
            width: 400px;
            height: 200px;
            margin-right: 77px;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              height: 100%;
              transition: all .2s linear;
            }
            &:hover {
              img {
                transform: scale(1.1);
              }
            }
          }
          .h1Img {
            margin-bottom: 74px;
          }
          .h3Img {
            margin-top: 92px;
            margin-bottom: 78px;
          }
          .article {
            p:nth-child(1) {
              height: 44px;
              text-align: right;
              margin-bottom: 20px;
              display: flex;
              justify-content: end;
              align-items: end;
              span.title {
                font-size: 20px;
                color: #FF0000;
                font-weight: 700;
                margin-right: 20px;
              }
              span.rangeYear {
                font-size: 40px;
                color: #999999;
                font-weight: 400;
                margin-bottom: 5px;
              }
            }
            p:nth-child(n + 1) {
              text-align: right;
              line-height: 28px;
              span.year {
                font-size: 14px;
                color: #000000;
                font-weight: bold;
              }
              span.content {
                font-size: 14px;
                color: #666666;
                font-weight: 400;
              }
            }
          }
        }
        li.article2 {
          div.imgContain {
            width: 400px;
            height: 200px;
            margin-left: 60px;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              height: 100%;
              transition: all .2s linear;
            }
            &:hover {
              img {
                transform: scale(1.1);
              }
            }
          }
          .h2Img {
            margin-top: 48px;
            margin-bottom: 78px;
          }
          .h4Img {
            margin-top: 92px;
          }
          .article {
            &.topArticle {
              margin-top: 1px;
            }
            p:nth-child(1) {
              height: 44px;
              text-align: left;
              margin-bottom: 20px;
              display: flex;
              align-items: end;
              span.rangeYear {
                font-size: 40px;
                font-weight: 400;
                color: #999999;
                margin-right: 20px;
                margin-bottom: 5px;
              }
              span.title {
                font-size: 20px;
                color: #FF0000;
                font-weight: 700;
              }
            }
            p:nth-child(n + 1) {
              text-align: left;
              line-height: 28px;
              span.year {
                font-size: 14px;
                color: #000000;
                font-weight: bold;
              }
              span.content {
                font-size: 14px;
                color: #666666;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
  }
  >div.honorQualification {
    width: 100%;
    height: 564px;
    background: #ffffff;
    >div.honorQualification_inner {
      width: 1240px;
      height: 100%;
      margin: 0 auto;
      padding-top: 80px;
      box-sizing: border-box;
      p:first-child {
        text-align: center;
        font-size: 28px;
        color: #000000;
        line-height: 30px;
        font-weight: 400;
        margin-bottom: 40px;
      }
      p:nth-child(2) {
        font-size: 14px;
        color: #666666;
        text-align: center;
        line-height: 28px;
        font-weight: 400;
        margin-bottom: 40px;
      }
      ul.carousel-ul {
        width: 100%;
        padding: 0 20px 20px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 386px;
          height: 60px;
          line-height: 60px;
          padding-left: 24px;
          box-sizing: border-box;
          margin-bottom: 20px;
          margin-right: 21px;
          background-image: url("../../assets/home/honorQualification.png");
          background-size: 100% 100%;
          box-shadow: 0 2px 10px 0 rgba(0,0,0,0.14);
          border-radius: 4px;
          transition: all .2s linear;
          &:nth-child(3n) {
            margin-right: 0;
          }
          &:hover {
            transform: scale(1.05);
          }
          span {
            font-size: 16px;
            color: #333333;
            font-weight: 700;
          }
        }
      }
      ::v-deep {
        .el-carousel__indicators {
          bottom: 10px;
          .el-carousel__indicator {
            width: 15px;
            height: 5px;
            margin-right: 10px;
            padding: 0;
            border-radius: 5px;
            background: #cccccc;
            transition: width .3s linear;
            &.is-active {
              width: 43px;
              background: #FF0000;
            }
            .el-carousel__button {
              display: none;
            }
          }
        }
      }
    }
  }
  >div.cooperativeClient {
    width: 100%;
    height: 557px;
    background: #f9f9f9;
    >div.cooperativeClient_inner {
      width: 1190px;
      height: 100%;
      margin: 0 auto;
      padding-top: 80px;
      box-sizing: border-box;
      p {
        text-align: center;
        font-size: 28px;
        color: #000000;
        line-height: 30px;
        font-weight: 400;
        margin-bottom: 60px;
      }
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 90px;
          height: 90px;
          background: #ccc;
          margin-bottom: 20px;
          margin-right: 20px;
          overflow: hidden;
          position: relative;
          &:nth-child(11n) {
            margin-right: 0;
          }
          &:hover {
            img {
              transform: scale(1.2);
            }
            span.line {
              left: 0;
            }
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
            transition: all 500ms;
          }
          span.line {
            width: 90px;
            height: 3px;
            display: block;
            background: #FF0000;
            position: absolute;
            left: -90px;
            bottom: 0;
            transition: all 500ms;
          }
        }
      }
    }
  }
}
</style>
