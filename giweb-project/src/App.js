import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import NavBar from './components/NavBar';
import React, {useState, useEffect} from 'react';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewHero from './pages/NewHero/NewHero';


const App = () => {

  useEffect(() => {
    fetchHeroes();
  }, [])

  const [heroes, setHeroes] = useState(
    {
      1: {
        nombre: '',
        edad: '',
        imagen: ''
      }
    }
  )

  const fetchHeroes = async () => {
    const response = await fetch('https://peticiones-giweb-3-default-rtdb.firebaseio.com/heroes.json')
    const data = await response.json()

    setHeroes(data)
  }

  const sendHeroe = async (heroe) => {
    console.log(heroe)
    const response = await fetch('https://peticiones-giweb-3-default-rtdb.firebaseio.com/heroes.json', {
      method: 'POST',
      body: JSON.stringify(heroe)
    })
    const data = await response.json()

    console.log(data)
  }

  const handleSubmit = (heroe) => {

    sendHeroe(heroe)
    fetchHeroes()
  }
  


  //JSX
  return(
    <div>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home heroes={heroes}/>}/>
          <Route path='/new' element={<NewHero onSubmit={handleSubmit} />}/>
        </Routes>
        
      </BrowserRouter>

      {/* <Home heroes={heroes}/> */}

    </div>
  )
}

export default App;
