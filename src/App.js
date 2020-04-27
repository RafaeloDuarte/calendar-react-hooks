import React, { useState } from 'react';
import DatePicker from './Date/DatePicker'

function App() {
  const initialState = 'none'
  const [hidden, setHidden] = useState(initialState)

  function toggleHidden() {
    if (hidden === 'none') {
      setHidden('')
    } else {
      setHidden('none')
    }
  }

  return (
    <div className="App">
      <button onClick={() => toggleHidden()}><h1>Calendar</h1></button>
      <div style={{ display: hidden }}>
        <DatePicker />
      </div>
    </div>
  );
}

export default App;