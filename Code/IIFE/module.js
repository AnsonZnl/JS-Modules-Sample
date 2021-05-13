// module.js文件
(function (window) {
    let data = 'data'
    //获取数据
    function get() {
        return data
    }
    // 修改数据
    function set(val) {
        data = val;
    }
    //暴露行为
    window.myModule = {
        get,
        set
    }
})(window)