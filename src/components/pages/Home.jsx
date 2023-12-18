import { useEffect } from 'react'
import botao from './home.js'

import style from './Home.module.css'

import html5 from '../../../public/img/logo/conhecimentos/html5.svg'
import css from '../../../public/img/logo/conhecimentos/css3.svg'
import js from '../../../public/img/logo/conhecimentos/js.svg'
import react from '../../../public/img/logo/conhecimentos/react.svg'
import figma from '../../../public/img/logo/conhecimentos/figma.svg'
import github from '../../../public/img/apresentacao/ap_github.svg'
import linkedin from '../../../public/img/apresentacao/ap_linkedin.svg'
import instagram from '../../../public/img/apresentacao/ap_instagram.svg'
import ap_img from '../../../public/img/ap_img.jpeg'




import Projetos1 from './projects/Projetos1'
import Projetos2 from './projects/Projetos2'
import Projetos3 from './projects/Projetos3'

import { configureScrollReveal } from './scrollReveal.js';




function Home() {
    botao()
    useEffect(() => {
        configureScrollReveal();
    }, []);

    return (
        <div>
            <main id='ap'>
                <div className={`${style.apresentacao} ${style.padrao} scroll-reveal`}>
                    <div>
                        <img src={ap_img} alt="Corvo" className={style.ap_img} />
                    </div>
                    <div className={style.ap_conteudo}>
                        <h3>Oi, sou</h3>
                        <h1 className={style.nome}>Luiz Henrique</h1>
                        <p className={style.texto}>Também conhecido como LHcodes, e estou entusiasmado em compartilhar minha jornada e paixão pelo desenvolvimento full stack através deste espaço digital. Sou um entusiasta autodidata da tecnologia, mergulhando de cabeça no vasto e fascinante mundo da programação.</p>
                        <a href="../../public/doc/cv.pdf" download='CV_LuizHenrique' className={style.bt_cv}>Baixar CV</a>
                        <div className={style.redes_ap}>
                            <a href="https://github.com/LHcodes" target='blank' className={style.rede1}><img src={github} alt="github" /></a>
                            <a href="https://www.linkedin.com/in/luiz-henrique-silva-87a72916a/" target='blank' className={style.rede2}><img src={linkedin} alt="linkedin" /></a>
                            <a href="" target='blank' className={style.rede3}><img src={instagram} /></a>
                        </div>
                    </div>

                </div>
                <div className={`${style.conhecimentos} ${style.padrao} scroll-reveal`}>
                    <h2>Conhecimentos</h2>
                    <div className={style.conhecimetos_flex}>
                        <div>
                            <p>*passe o cursor do mouse no card para ler*</p>
                            <p>HTML5 é a quinta versão do HTML, usado para estruturar conteúdo na web, com suporte a multimídia e recursos avançados.</p>
                            <p>
                                CSS3 é a terceira versão do CSS, proporcionando recursos avançados para estilizar páginas web, incluindo transições, animações e aprimoramentos visuais.
                            </p>
                            <p>
                                JavaScript é uma linguagem de programação de alto nível, dinâmica e orientada a objetos. Originalmente desenvolvida para ser executada nos navegadores, ela permite a manipulação dinâmica do conteúdo de páginas web, interação com o usuário, validação de formulários e criação de animações.</p>
                            <p>React é uma biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis. Desenvolvida pelo Facebook, é usada principalmente para criar aplicações web de página única SPAs e oferece uma forma eficiente de gerenciar o estado da aplicação e atualizar dinamicamente a interface do usuário.</p>
                            <p>
                            Figma é uma ferramenta de design colaborativo online usada para criar interfaces de usuário e designs gráficos.
                            </p>
                        </div>
                        <div>
                            <div className={style.conhecimentos_caixas}>
                                <div className={`${style.caixa_logo} ${style.caixa1} `}>
                                    <div className={style.overlayContainer}>
                                        <img src={html5} alt="HTML5" />
                                        <div className={style.overlayText}>
                                            <p>HTML5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.caixa_logo} ${style.caixa2} `}>
                                    <div className={style.overlayContainer}>
                                        <img src={css} alt="CSS 3" />
                                        <div className={style.overlayText}>
                                            <p>CSS 3</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.caixa_logo} ${style.caixa3} `}>
                                    <div className={style.overlayContainer}>
                                        <img src={js} alt="JavaScript" />
                                        <div className={style.overlayText}>
                                            <p>JavaScript</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.caixa_logo} ${style.caixa4} `}>
                                    <div className={style.overlayContainer}>
                                        <img src={react} alt="react" />
                                        <div className={style.overlayText}>
                                            <p>React Js</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.caixa_logo} ${style.caixa5} `}>
                                    <div className={style.overlayContainer}>
                                        <img src={figma} alt="figma" />
                                        <div className={style.overlayText}>
                                            <p>Figma</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.projetos} ${style.padrao} scroll-reveal`}>
                    <h2>Projetos</h2>

                    <div>
                        <Projetos1 />
                        <Projetos2 />
                        <Projetos3 />
                    </div>

                </div>


                <div className={`${style.experiencias} ${style.padrao} scroll-reveal`}>
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
                            <p className={style.texto}>- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            <p className={style.texto}>- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </div>
                    </div>

                    <div className={style.sprink} id='display-s'>
                        <p className={style.data}>Dez 2019 - jul 2021</p>
                        <h3 className={style.cargo}>Aprendiz</h3>
                        <p className={style.empresa}>Sprink / SP - São Paulo</p>
                        <div>
                            <p>- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            <p>- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </div>
                    </div>

                </div>
            </main>

        </div>

    )
}
export default Home