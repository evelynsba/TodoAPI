
class Tarefa{
    constructor(title,description, status){
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = new Date().toLocaleString();

    }
}
module.exports = Tarefa;