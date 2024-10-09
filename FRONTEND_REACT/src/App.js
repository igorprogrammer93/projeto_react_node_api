// src/App.js
import React, { useState } from 'react';
import UserList from './components/UserList';
import DocumentList from './components/DocumentList';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div className="App">
      <UserList />
      {selectedUserId && <DocumentList userId={selectedUserId} />}
    </div>
  );
}

export default App;
