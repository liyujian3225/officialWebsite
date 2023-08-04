<template>
  <div id="chinaMap" ref="chinaMap" :style="{ height: height, width: width }"></div>
</template>
<script>
import chinaMap from "./chinaMap.json"
import * as echarts from "echarts";
echarts.registerMap('china', chinaMap);
export default {
  props: {
    width: {
      type: String,
      default: "1200px",
    },
    height: {
      type: String,
      default: "1055px",
    },
  },
  data() {
    return {
      option: {},
      chart: null,
    };
  },
  watch: {
    params: {
      handler() {
        this.restoreChart();
      },
      deep: true,
    },
  },
  mounted() {
    this.restoreChart();
  },
  beforeDestroy() {

  },
  methods: {
    restoreChart() {
      this.initData();
      this.initEchart();
      this.refreshChart();
    },
    // 绘制图表
    refreshChart() {
      if (!this.chart) return false;
      this.chart.setOption(this.option || {}, true);
    },
    initEchart() {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.chinaMap);
      }
    },
    initData() {
      //中心点，山西
      const centerPoints = [
        { value: [112.305144, 37.619053], itemStyle: { color: '#FF0000' } }
      ]
      //发散点
      const divergencePoints = [
        { value: [85.294712, 41.371801], itemStyle: { color: '#FF0000' } },  //新疆
        { value: [116.41989, 40.189913], itemStyle: { color: '#FF0000' } },  //北京
        { value: [117.351154, 39.28914], itemStyle: { color: '#FF0000' } },  //天津
        { value: [118.186283, 36.374485], itemStyle: { color: '#FF0000' } }, //山东
        { value: [120.109522, 29.181876], itemStyle: { color: '#FF0000' } }, //浙江
        { value: [113.429877, 23.334664], itemStyle: { color: '#FF0000' } }, //广东
        { value: [112.271042, 30.98802], itemStyle: { color: '#FF0000' } },  //湖北
        { value: [115.732937, 27.636129], itemStyle: { color: '#FF0000' } },  //江西
      ]
      //飞线数据组合
      const linesData = divergencePoints.map(item => {
        const centerCoord = centerPoints[0].value;
        const { value: coord } = item;
        return {
          coords: [centerCoord, coord],
          lineStyle: {
            color: '#FF0000'
          }
        }
      })
      this.option = {
        geo: {
          map: 'china',
          aspectScale: 0.75, // 长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              shadowColor: 'rgb(210, 210, 210)',
              shadowOffsetX: 4,
              shadowOffsetY: 12
            }
          },
          regions: [{
            name: '南海诸岛',
            itemStyle: {
              areaColor: 'rgba(0, 10, 52, 1)',
              borderColor: 'rgba(0, 10, 52, 1)',
              normal: {
                opacity: 0,
                label: {
                  show: false,
                  color: '#009cc9',
                },
              },
            },
          }],
        },
        series: [
          {
            zlevel: 1,
            type: 'map',
            roam: false,
            select: {
              disabled: true
            },
            label: {
              normal: {
                show: true,
                backgroundColor: "#fff",
                offset: [0, -15],
                height: 24,
                lineHeight: 24,
                verticalAlign: "middle",
                borderRadius: 2,
                shadowColor: "rgba(0, 0, 0, .52)",
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                formatter: function(o) {
                  let { name } = o;
                  const rangeProvinceName = [
                    "新疆维吾尔自治区", "北京市", "天津市", "山东省", "江西省",
                    "浙江省", "广东省", "湖北省", "山西省",
                  ]
                  if(rangeProvinceName.includes(name)) {
                    name = name.replace("市", "");
                    name = name.replace("省", "");
                    name = name.replace("维吾尔自治区", "")
                    return " " + name + " ";
                  }else {
                    return ""
                  }
                },
                textStyle: {
                  color: '#FF0000',
                },
              },
              emphasis: {
                textStyle: {
                  color: '#FF0000',
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: '#CDCDCD',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: '#f7f8fa', // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#f7f8fa', // 100% 处的颜色
                  }],
                  globalCoord: true, // 缺省为 false
                },
              },
              emphasis: {
                areaColor: '#e2e4ec',
              },
            },
            zoom: 1.1,
            map: 'china', // 使用
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            zlevel: 1,
            rippleEffect: {
              number: 3, // 波纹的数量。
              period: 5, // 动画的周期，秒数。
              scale: 17, // 动画中波纹的最大缩放比例。
              brushType: 'fill', // 波纹的绘制方式，可选 'stroke' 和 'fill'。
            },
            symbolSize: 1,
            data: divergencePoints,
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            zlevel: 1,
            rippleEffect: {
              number: 3,
              period: 5,
              scale: 17,
              brushType: 'fill',
            },
            symbolSize: 2,
            data: centerPoints,
          },
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, // 箭头指向速度，值越小速度越快
              trailLength: 0.4, // 特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'pin', // 箭头图标
              symbolSize: 6, // 图标大小
            },
            lineStyle: {
              normal: {
                color: '#1DE9B6',
                width: 1, // 线条宽度
                opacity: 0.1, // 尾迹线条透明度
                curveness: 0.3, // 尾迹线条曲直度
              },
            },
            data: linesData,
          },
        ]
      };
    },
  },
};
</script>
<style></style>
