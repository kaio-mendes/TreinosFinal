import './App.css';
import Navbar from './pages/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Metas from './pages/Metas/Metas';
import Perfil from './pages/Perfil/Perfil';
import Registros from './pages/Registros/Registros';
import Treinos from './pages/Treinos/Treinos';
function App() {
  return (
    <>
  
      <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/> {/*Página principal */}
            <Route path="/treinos" element={<Treinos/>}/>
            <Route path="/registros" element={<Registros/>}/>
            <Route path="/metas" element={<Metas/>}/>
            <Route path="/perfil" element={<Perfil/>}/>

        </Routes>
      </Router>

    </>
  )
}

export default App
