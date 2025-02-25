const fs = require ("fs")

let getData = (fileName)=>{
    let data = fs.readFileSync("./config/"+fileName+".json", "utf-8")
    data = data ? JSON.parse(data) : []
    return data
}

module.exports = {
    getData,
    
}