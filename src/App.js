import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <header>
      <div>
          <Header />
          <HelloWorld name="Ridoan" />
          <Footer />
      </div>
    </header>
  );
}

export default App;