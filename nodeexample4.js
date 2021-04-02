const fs = require('fs') //filesystem/IO module

fs.readFile('sample.txt','utf8', handleFile)


    function handleFile(err, data) {
    if(err)
        throw err;
    else    
        console.log(data);
}