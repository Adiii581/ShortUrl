import React from 'react';
import './App.css'; // You can keep the default styling file
import ShortenerForm from './ShortenerForm'; // Import your new component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* This is where your form component will be displayed */}
        <ShortenerForm />
      </header>
    </div>
  );
}

export default App;


