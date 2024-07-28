const mongoose = require('mongoose');
const conectDataBase = () =>{
     console.log('Estamos conectando com banco de dados...')

    mongoose.connect("mongodb+srv://root:root@cluster0.msgbxkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(()=> console.log("MongoDB Conectado"))
    .catch((error)=>console.log(error));
};

module.exports = conectDataBase;