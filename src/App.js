import logo from './logo.svg';
import './App.css';
import { db } from './config/firebase'
import {getDocs, collection, addDoc} from 'firebase/firestore'
import { useEffect } from 'react';

function App() {

  const getData = async () => {
    const response = await getDocs(collection(db, 'lala'))
    console.log(response.docs.map(x=>console.log(x.data())))
  }

  const addData = async () => {
    const response = await addDoc(collection(db, 'lala'), { name: 'daniel', apellido: 'sepúlveda' })
    console.log(response)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
