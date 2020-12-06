<template>
    <div class="amap-page-container">
        {{markersWindow}}
        <el-amap vid="amapDemo" :map-style="mapStyle" :events="events" :zoom="zoom" :center="center "
            class="amap-demo">
            <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position"
                :events="marker.events" :draggable="marker.draggable" :vid="index" :icon="marker.icon">
            </el-amap-marker>
            <el-amap-info-window v-if="markersWindow" :position="markersWindow.position"
                :content="markersWindow.content" :visible="markersWindow.isvisible"
                :offset="markersWindow.offset" :isCustom="true">
                <div style="width:100px;height:100px;background:red">
                    {{markersWindow.content}}
                </div>
            </el-amap-info-window>
        </el-amap>
    </div>
</template>
<script>
export default {
    data() {
        let self = this;
        return {
            zoom: 12,
            center: [112.829992, 31.259648],
            address: "",
            markerRefs: [],
            markersWindow: {
                position: [112.829992, 31.259648],
                offset: [70, 55], // 窗体偏移
                isvisible: false,
                content: "000",
            },
            mapStyle: "amap://styles/e81dcba716127fc45d973f5ca8d2d69d",
            events: {
                click: (e) => {
                    this.markersWindow.isvisible = false;
                },
                init(o) {
                    let cluster;
                    setTimeout(() => {
                        AMap.plugin(["AMap.MarkerClusterer"], function () {
                            cluster =new AMap.MarkerClusterer(
                                o,
                                self.markerRefs,
                                {
                                    gridSize: 1,
                                    zoomOnClick: true,
                                    renderCluserMarker:
                                    self._renderCluserMarker,
                                }
                            );
                        });
                        console.log(o);
                    }, 1000);
                },
            },
            markers: [],
            // 保存点击的是哪个坐标点
            index: "",
        };
    },
    mounted() {
        this.$axios.get("/api/index/list_jtService").then((res) => {
            console.log(res.data.data);
            this.pline(res.data.data);
        });
    },
    created() {},
    methods: {
        pline(data) {
            let self = this;
            let markers = [];
            let basePosition = [112.822181, 31.255979];
            let icon =
                "https://iknow-pic.cdn.bcebos.com/43a7d933c895d1438b0a645d63f082025aaf074b";
            let array = []
            data.forEach((element) => {
                array.push([element.longitude, element.latitude])
                markers.push({
                    position: [element.longitude, element.latitude],
                    content: element.serviceName,
                    events: {
                        click: (e) => {
                            this.markersWindow.position = this.markers[
                                e.target.Ce.vid
                            ].position;
                            if (this.index === e.target.Ce.vid) {
                                this.markersWindow.isvisible = !this
                                    .markersWindow.isvisible;
                            } else {
                                this.markersWindow.isvisible = true;
                            }
                            this.markersWindow.content = this.markers[
                                e.target.Ce.vid
                            ].content;
                            this.index = e.target.Ce.vid;
                        },
                        init(o) {
                            self.markerRefs.push(o);
                        },
                    },
                    icon: new AMap.Icon({
                        image: icon,
                        size: new AMap.Size(30, 30),
                        imageSize: new AMap.Size(25, 30),
                    }),
                    visible: true, //控制标点的隐藏显示
                    draggable: false,
                    template: "<span>1</span>",
                });
            });
            this.markers = markers;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                for (let i = i+1; i < array.length; i++) {
                    if(array[index][0]==array[i][0]){
                        console.log(array[index][0],index)
                        console.log(array[i][0],i)
                    }
                }
            }

        },
        _renderCluserMarker(context) {
            const count = this.markers.length;
            let factor = Math.pow(context.count / count, 1 / 18);
            let div = document.createElement("div");
            let Hue = 180 - factor * 180;
            let bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
            let fontColor = "hsla(" + Hue + ",100%,20%,1)";
            let borderColor = "hsla(" + Hue + ",100%,40%,1)";
            let shadowColor = "hsla(" + Hue + ",100%,50%,1)";
            div.style.backgroundColor = bgColor;
            let size = Math.round(
                30 + Math.pow(context.count / count, 1 / 5) * 20
            );
            div.style.width = div.style.height = size + "px";
            // div.style.border = "solid 1px " + borderColor;
            // div.style.borderRadius = size / 2 + "px";
            div.style.boxShadow = "0 0 1px " + shadowColor;
            div.innerHTML = context.count;
            div.style.lineHeight = size + "px";
            div.style.color = fontColor;
            div.style.fontSize = "14px";
            div.style.textAlign = "center";
            context.marker.setOffset(new AMap.Pixel(-size / 1, -size / 5));
            context.marker.setContent(div);
        },
    },
};
</script>
<style scoped>
.amap-demo {
    height: 800px;
}
.amap-page-container /deep/ .bottom-center {
    background: red;
    width: 100px;
    height: 100px;
}
</style>