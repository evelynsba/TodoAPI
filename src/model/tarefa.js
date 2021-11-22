const { v4: uuidv4 } = require('uuid');
const sha256 = require('js-sha256');


class Tarefa{
    constructor(title,description, status){
        this.id = uuid();
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = new Date().toLocaleString();

    }
}
module.exports = Tarefa;