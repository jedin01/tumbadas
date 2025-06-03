const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Importa as rotas
const pageRoutes = require("./routes/index");

// Middleware para servir arquivos estáticos (CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname)));

// Usa as rotas definidas
app.use("/", pageRoutes);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});