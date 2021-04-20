const fs = require('fs');


fs.writeFile("./read.js", "console.log('hi')", (err, data)=> {
    if(err){
        console.log(err);
    } else{
        console.log('finished writing')
    }
});

console.log('after');