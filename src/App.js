import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  const [message, setMessage] = useState('text');
  const fetchData = async() => {
    const results = await axios.get('/.netlify/functions/helloWorld');
    setMessage(results.data.message);
    console.log(results)
  }

  useEffect(()=>{
      fetchData();
      
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
