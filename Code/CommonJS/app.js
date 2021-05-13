let module1 = require('./module.js')
let uniq = require('uniq')

console.log(uniq(module1.arr));// [1,2,3]