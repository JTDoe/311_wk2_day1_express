
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const newUser = {
"_id": 6,
"name": "Don Pooper",
"occupation": "TSA Agent",
"avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/AgentDonePooper.jpg"}
const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
return res.json(users)
})
app.get('/users/1', (req, res) => {
  return res.json(users[0])
})
app.post('/users', (req, res) => {
  return res.json(users.push(newUser))
})
app.put('/users/1', (req, res) => {
  return res.json(users)
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))