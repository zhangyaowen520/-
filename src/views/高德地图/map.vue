<template>
    <div>
        <div id="container">

        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        var map = new AMap.Map("container", {
            mapStyle: "amap://styles/dark", //设置地图的显示样式
            center: [112.588636, 31.167497],
            zoom: 11,
        });
        // var marker = new AMap.Marker({
        //     size: new AMap.Size(40, 50), // 图标尺寸
        //     image: "//webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png", // Icon的图像
        //     imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
        //     imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        //     position: new AMap.LngLat(112.829992, 31.259648), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        //     title: "北京",
        // });
        let icon = new AMap.Icon({
            image:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=32822217,3902783693&fm=26&gp=0.jpg",
            size: new AMap.Size(52, 52), //图标大小
            imageSize: new AMap.Size(26, 26),
        });
        // 将 Icon 实例添加到 marker 上:
        var marker = new AMap.Marker({
            size: new AMap.Size(4, 5), // 图标尺寸
            position: new AMap.LngLat(112.829992, 31.259648),
            // imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
            imageSize: new AMap.Size(4, 5), // 根据所设置的大小拉伸或压缩图片
            icon: icon, // 添加 Icon 实例
            title: "秦",
            zoom: 13,
        });
        marker.index = 1  //marker序号，用于后续显示自定认的信息窗口
        marker.id = 1    //景区ID号，用于后续区获取详细信息
        marker.on('click', function(e) {
            //添加点击事件,传入对象名，事件名，回调函数
            console.log(e,self.self.window[1],e.target.index)
            // self.windows[e.target.index].name = "555";
            // self.window[e.target.index].content = `<div>45555</div>`;
            // alert("景区信息获取失败！");
        });
        var markerList = [marker];

        map.add(markerList);
    },
};
</script>
<style scoped>
/* .wen{
    width:100%;
    height:500px;
} */
#container {
    width: 100%;
    height: 1000px;
    background: red;
}
</style>