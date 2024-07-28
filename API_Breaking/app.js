const express = require('express');
const app = express();
const userRoute = require("./src/routes/user.route");
const conectDataBase = require("./src/database/db")

const port = 3000;

//Conexão com database
conectDataBase();
//Lendo arquivos JSON
app.use(express.json());
app.use("/user", userRoute);
app.listen(port, () => console.log(`servidor rodadando na porta ${port}`));