import React from 'react';
import './App.css';
import Header from './components/Header'

function App(){
  return(
    <div className='App'>
      <Header/>{}
      <main style={{padding:'20px', textAlign:'center'}}>
        <h2>Welcome to yegnbar mezgeb</h2>
        <p>Start organizing your thoughts and studies.</p>
      </main>
    </div>
  );
}

export default App;