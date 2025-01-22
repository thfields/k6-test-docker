import express from 'express'
const app = express()
const port = 3000

app.get('/soma', (req, res) => {
    
    // Obtém os parâmetros da requisição
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Por favor, forneça os parâmetros n1 e n2 como números válidos.');
    }

    const resultado = n1 + n2;
    res.status(200).send(`O resultado da soma é: ${resultado}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://api:${port}`);
});
