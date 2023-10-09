// Module e Require
// Arquivo responsável por iniciar o servidor local

import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen (PORT, () => {console.log("servidor ligado")});

