import Logo from '../../../public/img/logo/footer.svg'
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.logo}>
                <img src={Logo} alt="" />
            </div>
            <div>
                <p>© 2023 LHcodes.com</p>
            </div>
        </div>
    )
}
export default Footer