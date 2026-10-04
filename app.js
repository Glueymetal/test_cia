const express = require('express')
const app = express()

app.get('/students', (req,res) => res.json({ "count": 3, "students": ["Asha", "Ravi", "Meena"] }))
app.listen(4000,() => console.log('App listening on port 4000'))
