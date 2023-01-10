const connectToDb = require('./db')
const express = require('express')
require('dotenv').config()
const app = express()
const router = require('./routes/tasks')
app.use(express.json())

const port= 5000

const start = async () =>{
    try {
        await connectToDb(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`App listening on port ${port}....`)
        })
    } 
    catch (error) {
        console.log(error)
    }
}

start()
//Routes

app.get('/', (req, res)=>{
    res.send('HomePage')
})

app.use('/api', router)