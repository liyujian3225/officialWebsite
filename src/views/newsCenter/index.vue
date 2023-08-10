<template>
  <div class="newsCenter">
    <custom-carousel :banner-list="bannerList">
      <template #description>
        <p class="mainDes">新闻中心</p>
        <p class="subDes">秉承“至诚专业”的企 业精神，扎根山西，聚焦电力。</p>
        <div class="more">
          <span>了解更多</span>
        </div>
      </template>
    </custom-carousel>
    <div class="content">
      <div class="content_inner">
        <p>公司新闻</p>
        <ul class="articleCard">
          <li v-for="(item, index) in importFilesData" :key="index" @click="checkDetail(item)">
            <div class="imgBox">
              <img :src="item.cover" alt="">
            </div>
            <p class="title">{{ item.title }}</p>
          </li>
        </ul>
        <ul class="articleList">
          <li class="areaTitle">更多新闻</li>
          <li
            class="articleTitle"
            v-for="(item, index) in moreFilesData"
            :key="index"
            @click="checkDetail(item)">
            <span>{{ item.title }}</span>
            <span>{{ item.createTime}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import customCarousel from "@/components/customCarousel"
export default {
  components: { customCarousel },
  data() {
    return {
      bannerList: [ require("@/assets/newsCenter/banner.png") ],
      importFilesData: [],
      moreFilesData: [],
    }
  },
  mounted() {
    this.initSourceData();
  },
  methods: {
    initSourceData() {
      //置顶新闻
      const importFiles = require.context('@/assets/article/import', false, /\.json$/);
      this.importFilesData = importFiles.keys().map(file => importFiles(file));
      //更多新闻
      const moreFiles = require.context('@/assets/article', false, /\.json$/);
      this.moreFilesData = moreFiles.keys().map(file => moreFiles(file));

      console.log("importFiles", importFiles);
      console.log("moreFiles", moreFiles);
    },
    checkDetail(item) {
      const { createTime } = item;
      this.$router.push({
        name: "newsCenterDetail",
        query: { createTime }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
div.newsCenter {
  p.mainDes {
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p.subDes {
    font-size: 16px;
    color: #FFFFFF;
    opacity: 0.8;
    margin-bottom: 40px;
  }
  div.more {
    width: 96px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    span {
      font-size: 14px;
      color: #ffffff;
    }
  }
  >div.content {
    width: 100%;
    background: #f9f9f9;
    >div.content_inner {
      width: 1260px;
      margin: 0 auto;
      padding-bottom: 60px;
      overflow: hidden;
      >p {
        font-size: 28px;
        color: #000000;
        line-height: 30px;
        text-align: center;
        margin-top: 80px;
        margin-bottom: 60px;
      }
      >ul.articleCard {
        display: flex;
        flex-wrap: wrap;
        padding: 0 30px;
        >li {
          width: 380px;
          height: 300px;
          background: #FFFFFF;
          box-shadow: 0 2px 15px 0 rgba(0,0,0,0.18);
          border-radius: 10px;
          margin-right: 30px;
          cursor: pointer;
          &:nth-child(3n) {
            margin-right: 0;
          }
          &:hover {
            >div.imgBox {
              img {
                transform: scale(1.05);
              }
            }
          }
          >div.imgBox {
            width: 380px;
            height: 184px;
            margin-bottom: 30px;
            border-radius: 10px 10px 0 0;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              height: 100%;
              transition: all 500ms;
            }
          }
          >p.title {
            width: 100%;
            height: 56px;
            line-height: 28px;
            padding: 0 17px;
            box-sizing: border-box;
            margin-bottom: 20px;
            font-size: 16px;
            font-weight: 700;
            color: #666666;
            display: -webkit-box;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
      >ul.articleList {
        width: 1200px;
        margin: 30px auto 0;
        li.areaTitle {
          height: 30px;
          line-height: 30px;
          padding-bottom: 13px;
          border-bottom: 1px dashed #b5b5b5;
          font-size: 18px;
          color: #000000;
        }
        li.articleTitle {
          height: 28px;
          line-height: 28px;
          margin-top: 14px;
          padding-bottom: 14px;
          border-bottom: 1px dashed #b5b5b5;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          span:first-child {
            color: #666666;
            cursor: pointer;
            transition: color .35s linear;
            &:hover {
              color: #ff0000;
            }
          }
          span:last-child {
            color: #999999;
          }
        }
      }
    }
  }
}
</style>


