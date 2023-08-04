<template>
  <div class="newsCenter">
    <div class="banner">
      <el-carousel arrow="never" indicator-position="none" height="640px">
        <el-carousel-item>
          <img :src="bannerImage" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="description">
        <p>新闻中心</p>
        <p>秉承“至诚专业”的企 业精神，扎根山西，聚焦电力。</p>
        <div class="more">
          <span>了解更多</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content_inner">
        <p>公司新闻</p>
        <ul class="articleCard">
          <li v-for="(item, index) in newsData.slice(0, 3)" :key="index" @click="checkDetail(item)">
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
            v-for="(item, index) in newsData.slice(3)"
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
import newsData from "./news.json"
export default {
  data() {
    return {
      newsData,
      bannerImage: require("@/assets/newsCenter/banner.png"),
    }
  },
  methods: {
    checkDetail(item) {
      const { id } = item;
      this.$router.push({
        name: "newsCenterDetail",
        query: { id }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
div.newsCenter {
  >div.banner {
    width: 100%;
    height: 640px;
    position: relative;
    div.description {
      width: 1200px;
      position: absolute;
      top: 225px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 10;
      p:first-child {
        font-size: 36px;
        color: #ffffff;
        font-weight: bold;
        margin-bottom: 30px;
      }
      p:nth-child(2) {
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


