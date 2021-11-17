const express = require("express");

const UserControllers = require("./controller/usersControllers/usersControllers");

const TasksControllers = require("./controller/tasksControllers/tasksControllers");

const { APP_PORT, APP_NAME } = require("./utils/appConfig");

const app = express();
// const port = config.PORT;

app.use((req, res, next) => {
    console.log(req.headers.host, new Date().toLocaleTimeString());
    next();
});

app.use(express.json)


app.get("/", (req, res)=> {
    res.send("Todo APP API")
});


app.get("/users", UserControllers.show);
app.post("/users", UserControllers.save);

app.get("/tasks",  TasksControllers.show);
app.postt("/tasks", TasksControllers.save);

app.listen(APP_PORT, ()=>{
    console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`);
});