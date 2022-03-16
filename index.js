const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//How to know in what ip im runing

var ip = require("ip");
console.dir ( ip.address() );


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'));


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

