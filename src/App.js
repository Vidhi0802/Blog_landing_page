import React from 'react'
import './App.css';

const pictures = new URL('../img/bg.jpg',import.meta.url)

function App() {
  return (
    <div className='App'> 
      <p>Blogs</p> 
      <div >
          
        <img className='bg' alt='' src={pictures}/>
        </div>       
    </div>
  );
}

export default App;
