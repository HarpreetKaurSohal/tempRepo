//Synchronous way(readFileSync)
const {readFileSync,writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//Creates a new file automatically in provided path with 'result' name.flag=a sets the file in append mode 
writeFileSync(
    './content/result.txt', 
    `Here is the result ${first}, ${second}`,{flag:'a'}
)

console.log('done with the tasks')
console.log('starting the next task')
//console.log(first,second)