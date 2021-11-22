const { v4: uuidv4 } = require('uuid');
const sha256 = require('js-sha256');


class Usuario{
    constructor(nome, email, senha){
        this.id = uuid();
        this.nome = nome;
        this.email = email;
        this.senha = sha256(senha);

    }
}
module.exports = Usuario;