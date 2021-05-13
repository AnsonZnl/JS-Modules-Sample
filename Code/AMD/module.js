// 定义没有依赖的模块
define(function () {
    let url = window.location.href

    function getUrl() {
        return url.toUpperCase()
    }
    return {
        getUrl
    } // 暴露模块
})