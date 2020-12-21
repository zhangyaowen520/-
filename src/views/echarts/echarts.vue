<template>
    <div>
        <div id="HomeTopRight_top"></div>
        <div id="HomeTopRight_tops"></div>
    </div>
</template>
<script>
import "../../../node_modules/echarts/map/js/province/hubei.js";

export default {
    data() {
        return {};
    },
    methods: {
        initECharts_top() {
            let HomeTopRight_top = this.$echarts.init(document.getElementById("HomeTopRight_top"));
            let jsonName = require("../../../node_modules/echarts/map/json/province/hubei.json");
            var geoCoordMap = {};
            var rawData = [];
            jsonName.features.forEach((element, index) => {
                console.log(element.properties);
                geoCoordMap[element.properties.name] = element.properties.cp;
                rawData.push([element.properties.name, 10, 20, 30]);
            });
            function makeMapData(rawData) {
                var mapData = [];
                for (var i = 0; i < rawData.length; i++) {
                    var geoCoord = geoCoordMap[rawData[i][0]];
                    if (geoCoord) {
                        mapData.push({
                            name: rawData[i][0],
                            value: geoCoord.concat(rawData[i].slice(1)),
                        });
                    }
                }
                return mapData;
            }
            this.$echarts.registerMap("湖北省", jsonName);
            let option = {
                tooltip: {
                    show: true,
                },
                roamController: {
                    show: true,
                    x: "right",
                    mapTypeControl: {
                        china: true,
                    },
                },
                geo: {
                    map: "湖北",
                    // silent: true,
                    roam: false,
                    // zoom: 1.155, // 地图初始大小
                    // center: [116.366794, 40.400309], // 初始中心位置
                    label: {
                        emphasis: {
                            show: false,
                            areaColor: "#eee",
                        },
                    },
                    // 地区块儿颜色
                    itemStyle: {
                        // normal: {
                        //     areaColor: "#55C3FC",
                        //     borderColor: "#fff",
                        // },
                        emphasis: {
                            areaColor: "#21AEF8",
                        },
                    },
                },
                series: [
                    {
                        type: "map",
                        map: "湖北省",
                        roam: false,
                        label: {
                            normal: {
                                show: true,
                                position: "centerTop",
                                height: 20,
                                padding: 3,
                                rich: {
                                    d: {
                                        color: "#fff",
                                        textBorderColor: "#000",
                                        textBorderWidth: 1,
                                        fontSize: 10,
                                        lineHeight: 24,
                                        width: 50,
                                        height: 24,
                                        marginTop: 20,
                                        align: "center",
                                    },
                                },
                                formatter: "{d|{b}}",
                                textStyle: {
                                    color: "#ccc",
                                    fontSize: "10",
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "transparent",
                                borderColor: "#3e91be",
                                areaColor: "transparent",
                                areaStyle: { areaColor: "transparent" },
                                textStyle: {
                                    color: "red", //省份字体颜色
                                },
                            },
                        },
                        data: [
                            {
                                name: "荆门市",
                                itemStyle: {
                                    normal: {
                                        color: "red",
                                        borderColor: "red",
                                        areaColor: "red",
                                        areaStyle: { areaColor: "red" },
                                        textStyle: {
                                            color: "red", //省份字体颜色
                                        },
                                    },
                                },
                                emphasis: {
                                    areaColor: "red",
                                },
                            },
                            {
                                name: "襄阳市",
                                itemStyle: {
                                    normal: {
                                        color: "red",
                                        borderColor: "red",
                                        areaColor: "red",
                                        areaStyle: { areaColor: "red" },
                                        textStyle: {
                                            color: "red", //省份字体颜色
                                        },
                                    },
                                },
                            },
                        ],
                    },
                ],
            };

            let this_ = this;
            let HomeTopRight_tops = this_.$echarts.init(document.getElementById("HomeTopRight_tops"));
            function renderEachCity() {
                let options = {
                    xAxis: [],
                    yAxis: [],
                    grid: [],
                    series: [],
                };
                this_.$echarts.util.each(rawData, function(dataItem, idx) {
                    var geoCoord = geoCoordMap[dataItem[0]];
                    var coord = HomeTopRight_top.convertToPixel("geo", geoCoord);
                    idx += "";
                    let inflationData = [Math.random() * 100, Math.random() * 100, Math.random() * 100];
                    options.xAxis.push({
                        id: idx,
                        gridId: idx,
                        type: "category",
                        nameLocation: "middle",
                        nameGap: 3,
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: "#666",
                            },
                        },
                        // data: xAxisCategory,
                        data: ["数据A", "数据B", "数据C"],
                        z: 100,
                    });
                    options.yAxis.push({
                        id: idx,
                        gridId: idx,
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#1C70B6",
                            },
                        },
                        z: 100,
                    });
                    options.grid.push({
                        id: idx,
                        width: 30,
                        height: 40,
                        left: coord[0] - 10,
                        top: coord[1] + 10,
                        z: 100,
                    });
                    options.series.push({
                        id: idx,
                        type: "bar",
                        xAxisId: idx,
                        yAxisId: idx,
                        barGap: 0,
                        barCategoryGap: 0,
                        // data: inflationData,
                        data: inflationData,
                        z: 100,
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    // 柱状图每根柱子颜色
                                    var colorList = ["#F75D5D", "#59ED4F", "#4C91E7"];
                                    return colorList[params.dataIndex];
                                },
                            },
                        },
                    });
                    (options["tooltip"] = {
                        show: true,
                        trigger: "axis",
                        // axisPointer:{
                        //     type:'shadow'
                        // },
                        // formatter:function(val){
                        //     console.log(val)
                        // }
                    }),
                        (options["legend"] = {
                            show: true,
                            icon: "rect",
                            itemWidth: 20,
                            itemHeight: 3,
                            right: "15%",
                            top: "0%",
                            textStyle: {
                                color: "#fff",
                            },
                            data: ["数据A", "数据B", "数据C"],
                        });
                    console.log(options);
                    HomeTopRight_tops.setOption(options);
                });
            }
            HomeTopRight_top.setOption(option);
            setTimeout(renderEachCity, 0);
        },
    },
    mounted() {
        this.initECharts_top();
    },
};
</script>
<style scoped>
#HomeTopRight_top,
#HomeTopRight_tops {
    width: 100%;
    height: 1000px;
    position: fixed !important;
    top: 0;
    left: 0;
}
</style>
