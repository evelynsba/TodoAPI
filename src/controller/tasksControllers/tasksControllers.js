
const TaskModel = require('../../model/tarefa')



class TasksControllers{
    constructor(dbConn){
        this.dbConn = dbConn;
    }

    show = (req,res) => {
    res.send(
        "Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados."
    );
};

save = (req,res) =>{

    const {title, description, status} = req.body;

    const task = new Task(title,description,status)
    res.send(
        "Rota POST"
    )
    this.dbConn.push(task)
}

}
module.exports = new TasksControllers(dbConn);