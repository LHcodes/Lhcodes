import Logo from '../../../public/img/logo/meuLogo.svg'
import icon from '../../../public/img/icon/menu.svg'

import style from './Header.module.css'


function Header() {
    return ( 
        <div className={style.header}>
            <div className={style.logo} >
                <img src={Logo} alt="" />
            </div>

            <div className={style.icon} >
                <img src={icon} alt="" />
            </div>
        </div>
    )
}
export default Header