import { useEffect } from 'react'
import botao from './home.js'

import style from './Home.module.css'

import html5 from '../../../public/img/logo/conhecimentos/html5.svg'
import css from '../../../public/img/logo/conhecimentos/css3.svg'
import js from '../../../public/img/logo/conhecimentos/js.svg'
import react from '../../../public/img/logo/conhecimentos/react.svg'
import figma from '../../../public/img/logo/conhecimentos/figma.svg'


import Projetos1 from './projects/Projetos1'
import Projetos2 from './projects/Projetos2'
import Projetos3 from './projects/Projetos3'




function Home() {
    botao()
    return(
        <div>
            <main id='ap'>
                <div className={`${style.apresentacao} ${style.padrao}`}>
                    <h3>Oi, sou</h3>
                    <h1>Luiz Henrique</h1>
                    <p>Também conhecido como LHcodes, e estou entusiasmado em compartilhar minha jornada e paixão pelo desenvolvimento full stack através deste espaço digital. Sou um entusiasta autodidata da tecnologia, mergulhando de cabeça no vasto e fascinante mundo da programação.</p>
                </div>
                <div className={`${style.conhecimentos} ${style.padrao}`}>
                    <h2>Conhecimentos</h2>
                    <div className={style.conhecimentos_caixas}>
                        <div className={style.caixa_logo}>
                            <div className={style.overlayContainer}>
                                <img src={html5} alt="HTML5" />
                                <div className={style.overlayText}>
                                    <p>HTML5</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.caixa_logo}>
                            <div className={style.overlayContainer}>
                                <img src={css} alt="CSS 3" />
                                <div className={style.overlayText}>
                                    <p>CSS 3</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.caixa_logo}>
                            <div className={style.overlayContainer}>
                                <img src={js} alt="JavaScript" />
                                <div className={style.overlayText}>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.caixa_logo}>
                            <div className={style.overlayContainer}>
                                <img src={react} alt="react" />
                                <div className={style.overlayText}>
                                    <p>React Js</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.caixa_logo}>
                            <div className={style.overlayContainer}>
                                <img src={figma} alt="figma" />
                                <div className={style.overlayText}>
                                    <p>Figma</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>               
                <div className={`${style.projetos} ${style.padrao}`}>
                    <h2>Projetos</h2>

                    <Projetos1/>
                    <Projetos2/>
                    <Projetos3/>

                </div>


                <div className={`${style.experiencias} ${style.padrao}`}>
                    <h2>Experiências</h2>
                    <div className={style.bts}>
                        <button className={style.bt_cargill} id='bt-c'>Cargill</button>
                        <button className={style.bt_sprink} id='bt-s'>Sprink</button>
                    </div>
                    <div className={style.cargill} id='display-c'>
                        <p className={style.data}>Dez 2019 - jul 2021</p>
                        <h3 className={style.cargo}>Analista jr</h3>
                        <p className={style.empresa}>Cargill/ SP - São Paulo</p>
                        <div>
                            <p>- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            <p>- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </div>
                    </div>

                    <div className={style.sprink} id='display-s'>
                    <p className={style.data}>Dez 2019 - jul 2021</p>
                        <h3 className={style.cargo}>Aprediz</h3>
                        <p className={style.empresa}>Sprink / SP - São Paulo</p>
                        <div>
                            <p>- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            <p>- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </div>
                    </div>

                </div>
            </main>
            <script src='./home.js'></script>
        </div>
        
    )
}
export default Home