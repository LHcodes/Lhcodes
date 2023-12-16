import style from './Projetos.module.css'
import { Link } from 'react-router-dom'

import img_projeto from "../../../../public/img/projetos/site_em_construcao.jpg"

import git from '../../../../public/img/logo/icone-projeto/git.svg'
import link_icon from '../../../../public/img/logo/icone-projeto/link.svg'

function Projetos2() {
    return (
        <>
            
                   
                   <div className={style.projeto}>
                       <Link to={'/projeto2'} className={style.link}><img src={img_projeto} alt="Projeto 1" className={style.img_projeto} /></Link>
                       <div>
                           <div className={style.nome_projeto}>
                           <Link to={'/projeto2'} className={style.link}><h3>Project Name 2</h3></Link>
                               <div className={style.icon_projeto}>
                                   <a href="https://github.com/" target='blank'><img src={git} alt="GitHub" /></a>
                                   <a href="#" target='blank'><img src={link_icon} alt="Link" /></a>
                               </div>
                           </div>
                           <p className={style.text_projeto}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat</p>
                           <div className={style.ferramentas_projeto}>
                               <p>React - Bootstrap - Styled Components</p>
                           </div>
                       </div>
                   </div>
        </>
    )
}

export default Projetos2