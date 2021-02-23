import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function App() {

  const getUser = async () => {
      try {
        const request = await axios.get('http://jsonplaceholder.typicode.com/use332rs')
        console.log(request.data)
      } catch(erro) {
        if(erro.response.status === 404) {
         toast.error('Não foi possível carregar os usuários')
        }
      }
  }

  useEffect(() => {
      getUser();
  }, [])

  return (
    <div className="App">
      <h1>Usuarios</h1>
      <Toaster />
    </div>
  );
}

export default App;
