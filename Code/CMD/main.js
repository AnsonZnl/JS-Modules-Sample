define(function (require, exports, module) {
    var moduleA = require('./module.js');
    alert(moduleA.a); // 打印出：hello world
});