const path = require('path');
const fs = require('fs');
const streamText = fs.createReadStream(path.join(__dirname,'text.txt'), 'utf8');
streamText.on('data', function(str){
    console.log(str);
});
