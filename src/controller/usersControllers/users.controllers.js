
class UserControllers{
    show = (req,res) =>{
    res.send(
        "Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados."
    );
}
}
    
module.exports = UserControllers;