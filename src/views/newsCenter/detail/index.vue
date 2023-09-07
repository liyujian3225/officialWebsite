<template>
  <div class="newsCenterArea">
    <div class="titleArea">
      <div class="titleArea_inner">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/newsCenter' }">
            <span class="newsCenter">新闻中心</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <span class="newsTitle">{{ articleData.newsTitle }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="articleArea">
      <p class="article_title">{{ articleData.newsTitle }}</p>
      <p class="article_date">{{ articleData.newsDate }}</p>

      <template v-if="articleData.newsContent">
        <div v-lazy-container="{ selector: 'img' }">
          <p class="article_content" v-html="replaceAllImg(articleData.newsContent)"></p>
        </div>
      </template>

      <div class="switch">
        <span :class="{ disabled: !previousBtnTitle }" @click="switchArticle('previous')">上一篇：{{ previousBtnTitle || '-' }}</span>
        <span :class="{ disabled: !nextBtnTitle }" @click="switchArticle('next')">下一篇：{{ nextBtnTitle || '-' }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/apiRequest/http'

export default {
  data() {
    return {
      id: this.$route.query.id,
      articleData: {},  //当前新闻数据
      allNewData: [],     //全部新闻标题数据
      previousBtnTitle: "",
      nextBtnTitle: "",

      previousBtnId: "",
      nextBtnId: "",
    }
  },
  created() {
    this.initData();
    this.getAllNews();
  },
  methods: {
    initData() {
      http.post('/company-homepage/api/news/findById', { id: this.id }).then((response) => {
        const { code, data } = response;
        if(code === '0000') {
          this.articleData = data;
        }
      })
    },
    getAllNews() {
      http.post('/company-homepage/api/news/findListByParam', {
        "pageNum": 1,
        "pageSize": 1000,
        "searchHistoryParam": "newsManagement",
        "content": "",
      }).then((response) => {
        const { code, data } = response;
        if(code === '0000') {
          const { pageData } = data;
          this.allNewData = pageData;

          const currentIndex = pageData.findIndex(item => { return item.id === this.id });
          if(currentIndex === 0) {
            this.previousBtnTitle = "";
            this.nextBtnTitle = pageData[currentIndex + 1].newsTitle;
          }else if(currentIndex === pageData.length - 1) {
            this.previousBtnTitle = pageData[currentIndex - 1].newsTitle;
            this.nextBtnTitle = "";
          }else {
            this.previousBtnTitle = pageData[currentIndex - 1].newsTitle;
            this.nextBtnTitle = pageData[currentIndex + 1].newsTitle;
          }

          this.previousBtnId = this.previousBtnTitle ? pageData[currentIndex - 1].id : "";
          this.nextBtnId = this.nextBtnTitle ? pageData[currentIndex + 1].id : "";
        }
      })
    },
    switchArticle(type) {
      let id;
      if(type === "previous") {
        if(!this.previousBtnTitle) return;
        id = this.previousBtnId;
      }else {
        if(!this.nextBtnTitle) return;
        id = this.nextBtnId;
      }
      this.$router.push({
        name: "newsCenterDetail",
        query: { id }
      });
    },
    replaceAllImg(html) {
      return html.replace(/<img[^>]*>/gi, function (str, capture) {
        return str.replace(/src=/gi, 'data-src=');
      });
    }
  }
}
</script>
<style lang="scss" scoped>
div.newsCenterArea {
  width: 100%;
  margin-top: 62px;
  >div.titleArea {
    background: #f9f9f9;
    >div.titleArea_inner {
      width: 1200px;
      height: 50px;
      margin:0 auto;
      display: flex;
      align-items: center;
      span.newsCenter {
        font-size: 14px;
        color: #000000;
        font-weight: normal;
      }
      span.newsTitle {
        font-size: 14px;
        font-weight: bold;
        color: #000000;
      }
      ::v-deep {
        .el-breadcrumb__separator {
          font-size: 12px;
          color: #000000;
        }
      }
    }
  }
  >div.articleArea {
    width: 1200px;
    margin: 80px auto;
    p.article_title {
      font-size: 28px;
      color: #000000;
      text-align: center;
      margin-bottom: 30px;
    }
    p.article_date {
      font-size: 16px;
      color: #999999;
      text-align: center;
      margin-bottom: 54px;
    }
    p.article_content {
      padding-bottom: 60px;
      border-bottom: 1px solid #9b9b9b;
      margin-bottom: 30px;
      ::v-deep {
        p {
          font-size: 14px;
          color: #666666;
          line-height: 28px;
          text-align: justify;
          padding: 10px 0;
        }
        img {
          margin-bottom: -10px;
        }
        div[data-w-e-type=video] {
          text-align: center;
        }
      }
    }
    div.switch {
      height: 24px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
        color: #000000;
        cursor: pointer;
        &.disabled {
          color: #999999;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
