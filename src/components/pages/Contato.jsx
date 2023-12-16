import style from './Contato.module.css'

function Contato() {
    return (
        <div className={style.container}>
            <h1>Contato</h1>
            <p>Entre em contato comigo pelas redes sociais ou e-mail.</p>

            <div className={style.redes}>
                <div className={style.redes_instagram}>
                    <a href="">
                        <img src="../../public/img/icon/instagram.svg" alt="Instagram" />
                        <p>Instagram</p>
                    </a>
                </div>
                <div className={style.redes_linkedin}>
                    <a href="">
                        <img src="../../public/img/icon/linkedin.svg" alt="Linkedin" />
                        <p>Linkedin</p>
                    </a>
                </div>
            </div>
            <div className={style.contato}>
                <div className={style.contato_telefone}>
                    <img src="../../public/img/icon/whatsapp.svg" alt="whatsapp" />
                    <p>(11) 91174-1708</p>

                </div>
                <div className={style.contato_email}>
                    <img src="../../public/img/icon/email.svg" alt="Email" />
                    <p>lhcodes@outlook.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contato