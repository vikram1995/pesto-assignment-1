const express = require('express')
const axios = require('axios')
const dbConnect = require('./connect').dbConnect
const dbOperations = require('./dbOperations')
const app = express()
const cors = require('cors')
const port = 4000

console.log("wating to connect..");
dbConnect()
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend v1.0.0')
})

app.get('/users', async (req, res) => {
    try {
        const users = await dbOperations.findData({})
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

app.get('/insertUsersintoDatabase', async (req, res) => {
    try {
        const usersList = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(usersList.data)
        const response = await dbOperations.insertData('insertMany', usersList.data)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
})


