import './style.css'

import logo from '../logo/logo.png';

function Logo() {
    return (
        <div className='logo'>
            <img
                src={logo} 
                alt='logo' 
                className='logo-img'>
                
            </img>
            <div className='titulo'>
                <p> SGL - Sistema de Gestão de Limpeza</p>
            </div>
        </div>
    )
}

export default Logo;