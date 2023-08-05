<template>
  <div class="joinUs">
    <custom-carousel :banner-list="bannerList">
      <template #description>
        <p class="mainDes">加入我们</p>
        <p class="subDes">加入“合力创新”共创心视界，我们在这里等你！</p>
        <div class="more">
          <span>了解更多</span>
        </div>
      </template>
    </custom-carousel>
    <div class="content">
      <p>加入我们</p>
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item
          v-for="(item, index) in JobsData"
          :name="index"
        >
          <template slot="title">
            <div class="block">
              <div class="left">
                <div class="index">{{ index + 1 }}</div>
                <div class="jobTitle">{{ item.jobTitle }}</div>
              </div>
              <div class="right">
                {{ item.dateModified }}
              </div>
            </div>
          </template>
          <ul class="jobContent">
            <li>
              <div class="title">岗位职责</div>
              <p v-for="(responsibilities, index1) in item.jobResponsibilities" :key="index1">{{ responsibilities }}</p>
            </li>
            <li>
              <div class="title">任职要求</div>
              <p v-for="(requirements, index2) in item.jobRequirements" :key="index2">{{ requirements }}</p>
            </li>
            <li>
              <div class="title">联系方式</div>
              <p>可发送简历至HR邮箱：hr@hlcx.cn</p>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
import JobsData from "./Jobs.json"
import customCarousel from "@/components/customCarousel"
export default {
  components: { customCarousel },
  data() {
    return {
      bannerList: [ require("@/assets/joinUs/banner.png") ],
      JobsData,
      activeNames: []
    }
  },
}
</script>
<style lang="scss" scoped>
div.joinUs {
  p.mainDes {
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p.subDes {
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 40px;
  }
  div.more {
    width: 96px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border: 1px solid rgba(151,151,151,1);
    cursor: pointer;
    span {
      font-size: 14px;
      color: #ffffff;
    }
  }
  >div.content {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 80px;
    >p {
      font-size: 28px;
      color: #000000;
      text-align: center;
      margin: 80px 0 60px;
    }
    .el-collapse {
      border-top: unset;
    }
    ::v-deep {
      .el-collapse-item__header {
        height: unset;
        line-height: unset;
        border-bottom: 1px solid #e6e6e6;
      }
      .el-collapse-item__arrow {
        margin-top: 20px;
        color: #999999;
        font-size: 20px;
      }
    }
    div.block {
      flex: 1;
      height: 93px;
      margin-right: 20px;
      padding: 40px 0 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div.left {
        display: flex;
        justify-content: start;
        align-items: center;
        div.index {
          width: 32px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          color: #fff;
          font-size: 24px;
          background: #FF0000;
          margin-right: 20px;
        }
        div.jobTitle {
          font-size: 20px;
          color: #000000;
        }
      }
      div.right {
        font-size: 16px;
        color: #999999;
      }
    }
    ul.jobContent {
      background: #f9f9f9;
      padding: 40px 54px;
      margin-top: 30px;
      li {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        div.title {
          height: 24px;
          line-height: 24px;
          font-size: 18px;
          color: #000000;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          color: #666666;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
