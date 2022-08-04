const express = require('express');
const app = express();
const UsuariosRouter = require('./routers/UsuariosRouter');

app.use('/', UsuariosRouter);
app.listen(3000,()=>{console.log("Estou escutando na porta 3000")})