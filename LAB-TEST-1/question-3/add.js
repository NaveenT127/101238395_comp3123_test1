const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, "Logs"))){
    fs.mkdirSync(path.join(__dirname, "Logs"));
}

for(let i = 0; i < 10; i++){
    fs.writeFileSync(path.join
        (__dirname, "Logs", `log${i}.txt`),
     "Hello from Safa\n")
     console.log(`log${i}.txt`)
}