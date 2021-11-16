const express = require("express");

const UserControllers = require("./controller/usersControllers/users.controllers");

const tasksHandler = require("./controller/tasksControllers/tasksControllers");

const {PORT} = require("./util/appConfig")

const users = new UserControllers();
const tasks = new TasksControllers();


const app = express();
// const port = config.PORT;

app.get("/", (req, res)=> {
    res.send("Todo APP API")
});


app.get("/users", users.show);
app.get("/tasks", tasks.show);

app.listen(PORT, ()=>{
    console.log(`Example app listening at http://localhost:${PORT}`);
});