import React, { useState } from 'react';
import Explore from './components/ExploreSec/ExploreSec.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About.jsx'; // 👈 1. Perfectly imported your new About component!

function App() {
  const [displayComponent, setDisplayComponent] = useState("explore");

  function handleSelectChange(event) {
    setDisplayComponent(event.target.value);
  }

  return (
    <div className="App">
      <Header onSelectChange={handleSelectChange} displayComponent={displayComponent} />
      
      {/* 🔄 2. Conditional Rendering Logic:
          If 'About us' (ex1) is selected, show your profile. 
          Otherwise, keep rendering the main website dashboard (<Explore />). */}
      {displayComponent === "ex1" ? (
        <About />
      ) : (
        <Explore />
      )}
    </div>
  );
}

export default App;