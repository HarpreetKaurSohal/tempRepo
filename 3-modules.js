//import different files using global variable 'require'

const name = require('./4-moduleName')
const sayHi = require('./5-moduleUtils')
const flav = require('./6-moduleFlavours')
require('./7-modulegrenade')
//console.log(flav)

sayHi('susan')
sayHi(name.john)
sayHi(name.peter)