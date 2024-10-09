const users = require('./userController').users;

exports.createDocument = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.userId));
  if (user) {
    const { name, status } = req.body;
    const document = { id: user.documents.length + 1, name, status, userId: user.id };
    user.documents.push(document);
    res.status(201).json(document);
  } else res.status(404).json({ error: 'Usuário não encontrado' });
};

exports.getAllDocuments = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.userId));
  if (user) res.json(user.documents);
  else res.status(404).json({ error: 'Usuário não encontrado' });
};

exports.updateDocument = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.userId));
  if (user) {
    const document = user.documents.find(d => d.id === parseInt(req.params.id));
    if (document) {
      document.name = req.body.name || document.name;
      document.status = req.body.status || document.status;
      res.json(document);
    } else res.status(404).json({ error: 'Documento não encontrado' });
  } else res.status(404).json({ error: 'Usuário não encontrado' });
};

exports.deleteDocument = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.userId));
  if (user) {
    const index = user.documents.findIndex(d => d.id === parseInt(req.params.id));
    if (index !== -1) {
      user.documents.splice(index, 1);
      res.json({ message: 'Documento deletado' });
    } else res.status(404).json({ error: 'Documento não encontrado' });
  } else res.status(404).json({ error: 'Usuário não encontrado' });
};
