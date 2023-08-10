<template>
  <div class="newsCenterArea">
    <div class="titleArea">
      <div class="titleArea_inner">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/newsCenter' }">
            <span class="newsCenter">新闻中心</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <span class="newsTitle">{{ articleData.title }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="articleArea">
      <p class="article_title">{{ articleData.title }}</p>
      <p class="article_date">{{ articleData.createTime }}</p>
      <p class="article_content" v-html="articleData.content"></p>
      <div class="switch">
        <span :class="{ disabled: !previousBtnTitle }" @click="switchArticle('previous')">上一篇：{{ previousBtnTitle || '-' }}</span>
        <span :class="{ disabled: !nextBtnTitle }" @click="switchArticle('next')">下一篇：{{ nextBtnTitle || '-' }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      createTime: this.$route.query.createTime,
      articleData: {},
      newsData: [],
      titleList: []
    }
  },
  computed: {
    previousBtnTitle: function() {
      return this.titleList[this.id - 1]
    },
    nextBtnTitle: function() {
      return this.titleList[this.id + 1]
    },
  },
  created() {
    this.initSourceData();
  },
  methods: {
    initSourceData() {
      //置顶新闻
      const importFiles = require.context('@/assets/article/import', false, /\.json$/);
      const importFilesData = importFiles.keys().map(file => importFiles(file));
      //更多新闻
      const moreFiles = require.context('@/assets/article', false, /\.json$/);
      const moreFilesData = moreFiles.keys().map(file => moreFiles(file));
      this.newsData = [...importFilesData, ...moreFilesData];

      this.articleData = this.newsData.filter(item => item.createTime === this.createTime)[0];
      this.titleList = this.newsData.map(item => item.title)
    },
    switchArticle(type) {
      let id;
      if(type === "previous") {
        if(!this.previousBtnTitle) return;
        id = this.id - 1;
      }else {
        if(!this.nextBtnTitle) return;
        id = this.id + 1
      }
      this.$router.push({
        name: "newsCenterDetail",
        query: { id }
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
      font-size: 16px;
      color: #333333;
      line-height: 32px;
      text-indent: 2em;
      padding-bottom: 60px;
      border-bottom: 1px solid #9b9b9b;
      margin-bottom: 30px;
      ::v-deep {
        p {
          font-size: 14px;
          color: #333333;
          line-height: 32px;
        }
        img {
          margin-top: 30px;
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
