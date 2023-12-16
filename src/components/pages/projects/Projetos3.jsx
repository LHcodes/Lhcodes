import style from './Projetos.module.css'
import { Link } from 'react-router-dom'

function Projetos3() {
    return (
        <>
            
                   
            <div className={style.projeto}>
                       <Link to={'/projeto3'} className={style.link}><img src="../../../public/img/projetos/site_em_construcao.jpg" alt="Projeto 1" className={style.img_projeto} /></Link>
                       <div>
                           <div className={style.nome_projeto}>
                           <Link to={'/projeto3'} className={style.link}><h3>Project Name 3</h3></Link>
                               <div className={style.icon_projeto}>
                                   <a href="https://github.com/" target='blank'><img src="../../../public/img/logo/icone-projeto/git.svg" alt="GitHub" /></a>
                                   <a href="#" target='blank'><img src="../../../public/img/logo/icone-projeto/link.svg" alt="Link" /></a>
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

export default Projetos3