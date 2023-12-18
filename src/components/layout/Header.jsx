import React, { useEffect, useRef } from 'react';
import Logo from '../../../public/img/logo/meuLogo.svg';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

import Menu from '../../../public/img/icon/menu.svg'
import Menu_sair from '../../../public/img/icon/menu_sair.svg'

function Header() {

    const btMenuRef = useRef(null);


    useEffect(() => {
        // Adicionar o event listener aqui usando o ref
        const btMenu = btMenuRef.current;

        if (btMenu) {
            btMenu.addEventListener("click", click_menu);

            // Remover o event listener no cleanup da useEffect
            return () => {
                btMenu.removeEventListener("click", click_menu);
            };
        }
    }, []); // O array de dependências está vazio para garantir que a useEffect seja executada apenas uma vez

    function click_menu() {
        const navbar = document.getElementById('navbar');

        if (navbar.style.display === 'none') {
            btMenuRef.current.src = `${Menu_sair}`;
            navbar.style.display = 'block';
        } else {
            btMenuRef.current.src = `${Menu}`;
            navbar.style.display = 'none';

        }
    }



    // Adicionando uma função para fechar o menu quando um link é clicado
    const closeMenu = () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.style.display = 'none';
            btMenuRef.current.src = `${Menu}`;
        }
        
    };


    return (
        <div className={style.header}>
            <div className={style.topo_header}>
                <div className={style.logo}>
                    <Link to={'/'}><img src={Logo} alt="Logo home" className={style.logo_passaro} /></Link>
                </div>

                <div className={style.icon}>
                    <img
                        src={Menu}
                        alt="menu"
                        id='bt_menu'
                        ref={btMenuRef}
                    />
                </div>
            </div>
            <div className={style.navbar} id='navbar'>
                <div className={style.navbar_link}>
                    {/* Adicionando a função closeMenu a cada link */}
                    <Link onClick={closeMenu} className={style.link} to={'/'}>
                        Home
                    </Link>
                    <Link onClick={closeMenu} className={style.link} to={'/projetos'}>
                        Projetos
                    </Link>
                    <Link onClick={closeMenu} className={style.link} to={'/contato'}>
                        Contato
                    </Link>
                    <Link onClick={closeMenu} className={style.link} to={'/sobre'}>
                        Sobre
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;