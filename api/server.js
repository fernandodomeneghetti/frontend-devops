const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/contato", (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    console.log("Novo contato recebido:", { nome, email, mensagem });

    return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
