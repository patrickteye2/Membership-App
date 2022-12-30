require('./database');
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path')
port = 8000;



app.use(urlencoded())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(path.join(__dirname, './public/index.html'))
})

app.post('/', (req, res) => {

    res.send(req.body);

})

app.listen(port, () => {
    console.log(`Server has started on ${port}`)
   
})

