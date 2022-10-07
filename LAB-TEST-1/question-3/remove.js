const fs = require('fs');
const path = require('path');

if (fs.existsSync("Logs")){

    fs.readdir("Logs", (err, __dirname) => {
        
        for (const file of __dirname) {
            
            const filePath = path.join("Logs", file);
            
            fs.unlink(filePath, err => {
                }
            )
            console.log(`delete files... ${file}`)  
        }
        fs.rmdirSync("Logs")
    }
)}
