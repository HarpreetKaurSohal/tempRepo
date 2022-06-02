const lod=require('lodash')
//flattenDeep function part os lodash dependencies
const items=[1,[2,[3,[4]]]]
const newItems =  lod.flattenDeep(items)

console.log(newItems)