//icons
import {FaUser, FaLock} from 'react-icons/fa'
//state é como se fosse as variaveis 
import {useState} from 'react';

//hook pode navegar entre as rotas
import { useNavigate } from 'react-router-dom';

//para inserir img é necessario importar
import logo from '../../assets/logo.png';

import './login.css';

const Login = () => {
  //é necessario criar a var p armazenar os states
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); //hook pra iniciar 

  //função p envio do formulario
  const handleSubmit = (event) => {
    event.preventDefault();

     // aqui é a validação do login
     if (userName === 'ANACAROLIN' && password === 'ana#$#') {
      navigate('/home'); // redireciona para /home
      alert('login bem sucedido, ' + userName)
    } else {
      alert('usuário ou senha incorretos!');
    }
  };

  return (
    <div className='container'>
    <img src={logo} alt="Logo" className="logo" />
      <div id='loginForm' />
      {/*handleSubmit é uma função p lidar com o envio de forms de forma eficiente e segura */}
      <form onSubmit={handleSubmit}>
        

        <div className='input-field'>
        <input type='text' placeholder='usuário' onChange={(e) => setUsername(e.target.value)}/>
        <FaUser className='icon' />
        </div>
        <div className='input-field'>
        {/* função q extrai do input e armazena*/}
        <input type='password' placeholder='senha' onChange={(e) => setPassword(e.target.value)} />
        <FaLock className='icon' />
        </div>

        {/* checkbox lembre de mim*/}
        <div className='recall-forget'>
            <label>
                <input type='checkbox'/>
                lembre de mim
            </label>
            <a href='#'> esqueceu a senha?</a>
        </div>

        <button>entrar</button>
      </form>
    </div>
  );
}

export default Login
