const bodyParser = require("body-parser");
const express = require("express");
const usersRouter = require('./app/routes/routes');

const app = express();

const PORT = process.env.PORT || 3001;

//Passa automaticamente toda resposta enviada para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Rotas
app.use('/', usersRouter)

//Iniciando o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor criado na porta ${PORT}`)
})