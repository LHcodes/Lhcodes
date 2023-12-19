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
import corvo from '../../../public/img/img_conhecimentos.jpeg'




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
                        <p className={style.texto}>Igualmente identificado como LHcodes, sinto-me entusiasmado em partilhar minha trajetória e dedicação ao desenvolvimento full stack por meio deste espaço digital. Sou um entusiasta autodidata da tecnologia, imergindo profundamente no amplo e fascinante universo da programação.</p>
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
                        <div className={style.conhecimentos_img}>
                            <img src={corvo} alt="" />

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
                            <p className={style.texto}>· Auxílio no desenvolvimento das operações
                                e resolução de problemas, prestando
                                serviço de atendimento ao fornecedor de
                                ponta.</p>
                            <p className={style.texto}>· Investigação e correção, além do aumento
                                da prioridade de problemas de projetos</p>
                            <p className={style.texto}>· Aumento da eficiência do escritório ao
                                modernizar os sistemas de organização de
                                documentos e implementar com eficácia
                                soluções do tipo visual basic for applications .</p>
                        </div>
                    </div>

                    <div className={style.sprink} id='display-s'>
                        <p className={style.data}>Dez 2019 - jul 2021</p>
                        <h3 className={style.cargo}>Aprendiz</h3>
                        <p className={style.empresa}>Sprink / SP - São Paulo</p>
                        <div>
                            <p>· Desenvolver planilhas automatizadas para efetuar o monitoramento dos pagamentos aos colaboradores.</p>
                            <p>· Supervisionar a atribuição de responsabilidades aos novos aprendizes, otimizando a distribuição de tarefas.</p>
                            <p>· Gerenciar a documentação referente aos novos colaboradores e aos processos organizacionais.</p>
                        </div>
                    </div>

                </div>
            </main>

        </div>

    )
}
export default Home