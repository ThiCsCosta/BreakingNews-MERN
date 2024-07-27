const express = require('express');
const app = express();
const port = 3000;
const userRoute = require("./src/routes/user.route");

//Lendo arquivos JSON
app.use(express.json());
app.use("/user", userRoute);
app.listen(port, () => console.log(`servidor rodadando na porta ${port}`));