// aqui eu tô importando o react-router-dom, que é o que vai me permitir criar rotas no react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importando o css do app
import './App.css'

// importa os componentes =
// os nomes dos componentes devem começar com letra maiúscula
import Login from './components/login/login';
import Home from './components/login/home/home';

function App() {
  return (
    <div className='App'>
      {/* n precisa do <Login />  porque já tem uma rota pra ele */}

      {/* apenas o router aqui dentro pra controlar a navegação */}
      <Router>
        <Routes>
          {/* essa rota vai mostrar o componente Login quando eu estiver na url "/" */}
          <Route path="/" element={<Login />} />

          {/* essa rota vai mostrar o componente Home quando  for pra "/home" */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

// exporta o App pra ele ser usado em outro lugar
export default App;
