;
(function () {
    require(['module.js'], function (module) {
        let currentUrl = module.getUrl();
        alert('当前页面的URl：' + currentUrl);
    })
})()