<template>
    <div class="wenwen">
        <wen-map style="width:100%;height:1000px" :vueMap="vueMap" :vueMarker="vueMarker"></wen-map>
    </div>
</template>
<script>
import WenMap from "./wenmap";
export default {
    components: { WenMap },
    data() {
        return {
            vueMap: {
                mapStyle: "amap://styles/808c70950aa8906856799b9ba1514eb6", //设置地图的显示样式
                center: [112.588636, 31.167497],
                zoom: 11,
            },
            vueMarker: [],
        };
    },
    created() {
        for (let index = 0; index < 100; index++) {
            this.vueMarker.push({
                position: [112.588636 + Math.random(), 31.167497 + Math.random()],
                icon: {
                    img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1922929739,3431643747&fm=26&gp=0.jpg",
                },
                title: Math.random(),
                on: function (e) {
                    console.log(e);
                },
            });
        }
    },
};
</script>
<style scoped></style>
