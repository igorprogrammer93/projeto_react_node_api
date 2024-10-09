// src/controllers/userController.js
const users = [];
let userIdCounter = 1;

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }
  const user = { id: userIdCounter++, name, email, documents: [] };
  users.push(user);
  res.status(201).json(user);
};
exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id); // Pega o ID do usuário na rota
    const userIndex = users.findIndex(user => user.id === userId); // Encontra o índice do usuário
  
    if (userIndex !== -1) { // Se o usuário for encontrado
      users.splice(userIndex, 1); // Remove o usuário do array
      res.json({ message: 'Usuário deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' }); // Retorna erro 404 se o usuário não existir
    }
  };
