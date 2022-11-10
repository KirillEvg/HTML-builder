const path = require ('path');
const fs = require('fs');
const dir = path.join(__dirname, 'secret-folder');

async function reading(){
  const contFolder = await fs.promises.readdir(dir);
  contFolder.forEach(async function(item){
    const dirFiles = path.join(dir, item);
    const charact = await fs.promises.stat(dirFiles);
    if (charact.isFile()) {
      let arr = path.basename(dirFiles).split('.');
      const s = Math.round(charact.size / 1024 * 1000) / 1000;

      console.log(`${arr[0]} - ${arr[1]} - ${s}kb`);
    }
  })
}

reading();
