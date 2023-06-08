const express = require('express')
const app = express()


// Routes

app.get("/", (req, res)=> {
    res.send('Hello Taufiq ALghani')
})

app.listen (3000, ()=> {
    console.log('listening on port 3000')
})