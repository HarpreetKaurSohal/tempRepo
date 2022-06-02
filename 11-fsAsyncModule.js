//Asynchronous way
const {readFile,writeFile} = require('fs')

console.log('start')
//asynchrounous method requires user method declaration with error and result as parameters
readFile('./content/first.txt', 'utf8', (err,result) =>{
    if(err){
        console.log('File not found');
        return;
    }
    //if file found store the result in 'first' variable
    const first = result;
    //check second file
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log('File not found');
            return;
        }
        //similar case
        const second = result;
        //finally if both files available then create a new file with previous results
        writeFile('./content/result_async.txt',
        `Here is the result ${first}, ${second}`,
        (err,result)=> {
            if(err){
                console.log('File not found');
                return;
            }
            console.log('done with this task')
        })
    })
    //console.log(result)
})
console.log('starting the next task')