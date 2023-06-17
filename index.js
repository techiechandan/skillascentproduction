const express = require('express')
const app = express();

app.use(express.static("./"));


const path = require('path');
app.get("*",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});