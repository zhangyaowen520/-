<template>
    <div>
        <div id="container"></div>
    </div>
</template>
<script>
export default {
    props: {
        vueMap: {
            type: Object,
            default: {},
        },
        vueMarker: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            map: "",
            Amapp: {
                zoom: 15, //设置地图显示的缩放级别
                center: [112.588636, 31.167497], //设置地图中心点坐标
                // layers: [new AMap.TileLayer.Satellite()], //设置图层,可设置成包含一个或多个图层的数组
                mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
                viewMode: "4D", //设置地图模式
                lang: "zh_cn", //设置地图语言类型
            },
            MyMarker: {
                position: new AMap.LngLat("", ""),
                imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
                imageSize: new AMap.Size(4, 5), // 根据所设置的大小拉伸或压缩图片
                icon: "", // 添加 Icon 实例
                title: "", //鼠标放上去的时候显示
                zoom: 13,
            },
        };
    },
    mounted() {
        // 地图初始化
        this.WenAmap();
        // 把地图传染到页面上

        this.WenMarker();

        // var marker = new AMap.Marker({
        //     size: new AMap.Size(40, 50), // 图标尺寸
        //     image: "//webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png", // Icon的图像
        //     imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
        //     imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        //     position: new AMap.LngLat(112.829992, 31.259648), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        //     title: "北京",
        // });
        // let icon = new AMap.Icon({
        //     image:
        //         "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=32822217,3902783693&fm=26&gp=0.jpg",
        //     size: new AMap.Size(52, 52), //图标大小
        //     imageSize: new AMap.Size(26, 26),
        // });
        // // 将 Icon 实例添加到 marker 上:

        // marker.index = 1; //marker序号，用于后续显示自定认的信息窗口
        // marker.id = 1; //景区ID号，用于后续区获取详细信息
        // marker.on("click", function (e) {
        //     //添加点击事件,传入对象名，事件名，回调函数
        //     console.log(e, self.self.window[1], e.target.index);
        //     // self.windows[e.target.index].name = "555";
        //     // self.window[e.target.index].content = `<div>45555</div>`;
        //     // alert("景区信息获取失败！");
        // });
    },
    methods: {
        WenAmap() {
            for (const key in this.Amapp) {
                const element = this.Amapp[key];
                if (typeof this.vueMap[key] !== "undefined") {
                    this.Amapp[key] = this.vueMap[key];
                }
            }
            console.log(this.Amapp);
            this.map = new AMap.Map("container", this.Amapp);
        },

        WenMarker() {
            let markerList = [];
            this.vueMarker.forEach((element, index) => {
                let markerp;
                // const marker = this.MyMarker[key];
                markerp = {
                    position: new AMap.LngLat(element.position[0], element.position[1]),
                    imageOffset: !element.imageOffset
                        ? new AMap.Pixel(0, 0)
                        : new AMap.Pixel(element.imageOffset[0], element.imageOffset[1]), // 图像相对展示区域的偏移量，适于雪碧图等
                    imageSize: !element.imageSize
                        ? new AMap.Size(4, 5)
                        : new AMap.Size(element.imageSize[0], element.imageSize[1]), // 根据所设置的大小拉伸或压缩图片
                    icon: !element.icon
                        ? ""
                        : new AMap.Icon({
                            image: element.icon.img,
                            size: !element.icon.size
                                ? new AMap.Size(30, 30)
                                : new AMap.Size(element.icon.size[0], element.icon.size[1]), //图标大小
                            imageSize: !element.icon.imageSize
                                ? new AMap.Size(26, 26)
                                : new AMap.Size(
                                    element.icon.imageSize[0],
                                    element.icon.imageSize[1]
                                ),
                        }),
                    title: !element.title ? "" : element.title, //鼠标放上去的时候显示
                };

                let markers = new AMap.Marker(markerp);
                if (element.on) {
                    markers.on("click", element.on);
                }
                markerList.push(markers);
            });
            this.map.add(markerList);
        },
    },
};
</script>
<style scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>