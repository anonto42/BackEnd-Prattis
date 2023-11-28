let a = 10;

let figlet = require('figlet')
const fuck = figlet('hello',function(err, data){
    if(err){
        console.log('yes')
        console.dir(err)
        return;
    }
    console.log(data)
})

module.exports = fuck; // we can exports file with help of this 