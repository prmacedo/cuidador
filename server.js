const express = require('express')
const { resolve } = require('path')

const app = express()

app.use('/', express.static(resolve(__dirname,'./build')))


app.listen(process.env.PORT || 5000, (err) => {
    if(err){ return console.log("Meu erro",err)}
    console.log('Tudo funcionando... :D')
})
