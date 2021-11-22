
class UserControllers{
    show = (req,res) =>{
    res.send(
        "Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados."
    );
}

save = (req,res) =>{
    res.send(
        "Rota POST"
    )
}

remove = (req,res) =>{
    res.send(
        
    )
}
}
    
module.exports = new UserControllers();