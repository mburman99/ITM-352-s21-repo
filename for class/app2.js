const fs = require('fs');

//delete function

fs.unlink("./filetobedeleted.txt", err => {
    if(err){
        console.log(err)
    } else {
        console.log("done async")
    }
});


console.log('do next step after delete');