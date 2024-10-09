const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Definindo a rota base para usuários
app.use('/users', userRoutes);

const PORT = 3001; // Certifique-se de que está na porta certa
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
