module.exports = {
    devServer: {
        port: 9080, // 端口号配置
        proxy: {
            /*通用接口代理*/
            "/api": {
                target: "http://111.47.3.250:9080",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            /*加载菜单专用代理*/
           /* "/bpi": {
                target: "http://192.168.0.197:9081",
                changeOrigin: true,
                pathRewrite: {
                    "^/bpi": "/"
                }
            },*/
        }
    },
    configureWebpack: {
        externals: {
            AMap: "window.AMap",
            AMapUI: "AMapUI"
        }
    },
    lintOnSave: false
};
