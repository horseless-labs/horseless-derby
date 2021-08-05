import { useState, useEffect } from 'react'
import React from 'react'
import Table from './components/Table'
import ShowRacersButton from './components/ShowRacersButton'
import AddUsersButton from './components/AddUsersButton'

function App() {
  const [ready, setReady] = useState(false);
  
  return (
    <div className="container">
      <ShowRacersButton
        onClick={() => setReady(!ready)} />
      <AddUsersButton />
    </div>
  );
}

export default App;
