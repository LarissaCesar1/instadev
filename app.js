const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const UsuariosRouter = require('./routers/UsuariosRouter');

app.use(express.urlencoded({ extended: false }));


app.use('/', UsuariosRouter);
app.listen(3000,()=>{console.log("Estou escutando na porta 3000")})