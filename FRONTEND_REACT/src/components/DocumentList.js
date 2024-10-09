// src/components/DocumentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DocumentList = ({ userId }) => {
  const [documents, setDocuments] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}/documents`);
      setDocuments(response.data);
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
    }
  };

  const createDocument = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/users/${userId}/documents`, { name, status });
      setDocuments([...documents, response.data]);
      setName('');
      setStatus('');
    } catch (error) {
      console.error("Erro ao criar documento:", error);
    }
  };

  const deleteDocument = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}/documents/${id}`);
      setDocuments(documents.filter(document => document.id !== id));
    } catch (error) {
      console.error("Erro ao deletar documento:", error);
    }
  };

  return (
    <div>
      <h2>Documentos do Usuário {userId}</h2>
      <div>
        <input
          type="text"
          placeholder="Nome do documento"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button onClick={createDocument}>Criar Documento</button>
      </div>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            {document.name} - {document.status}
            <button onClick={() => deleteDocument(document.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
