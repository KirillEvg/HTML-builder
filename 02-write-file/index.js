const path = require('path');
const fs = require('fs');
const output = fs.createWriteStream(path.join(__dirname,'text.txt'))
process.stdout.write('Good day! Please, write text......\n');
process.stdin.on('data', function(str){
  str.toString().trim() === 'exit' ? goodBye() : output.write(str);
});
  process.on('SIGINT', goodBye);
function goodBye(){
  process.stdout.write('Good bye!');
  process.exit();
};
