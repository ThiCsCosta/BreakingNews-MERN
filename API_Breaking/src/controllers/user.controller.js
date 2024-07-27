const create = (req, res) =>{
    const {name, userName, email, password, avatar} = req.body;

    if(!name || !userName || ! email || !password || !avatar){
        res.status(400).json({mensagem: "Preencha todos os campos para continuar!"});
    }

    res.status(201).send({
        message: "Usuário criado com sucesso!",
        user: {
            name, userName, email, avatar
        }
    });
}

module.exports = {create};