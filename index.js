const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const { users } = require("./state");
const bodyParse = require("body-parser");

const counter = users.length;

/* BEGIN - create routes here */

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/users/1", (req, res) => {
  return res.json(users[0]);
});

app.post("/users", (req, res) => {
  users.push({
    _id: counter + 1,
    ...req.body,
  });
  const newUser = {
    _id: 6,
    name: "Don Pooper",
    occupation: "TSA Agent",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/5/50/AgentDonePooper.jpg",
  };

  res.json(users);
});

app.put("/users/1", (req, res) => {
  users[0].name = "Frankie";
  res.send(users[0]);
});

app.delete("/users/1", (req, res) => {
  users.shift();
  res.send("Deleted");
});

app.get("/users/:userId", (req, res) => {
  const id = req.params.userId;
  console.log(req);
  console.log(id);
  const filteredUsers = users.filter((user) => user._id === Number(id));
  res.json(filteredUsers);
});

app.delete("/users/:userId", (req, res) => {
  const id = req.params.userId;

  const filteredUsers = users.find((user) => user._id === Number(id));
  if (filteredUsers) {
    filteredUsers.isActive = "false";
    res.json(filteredUsers);
  }
});

/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
