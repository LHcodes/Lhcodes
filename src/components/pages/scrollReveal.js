import ScrollReveal from "scrollreveal";
import style from './Home.module.css'

// Aqui você não precisa da chamada sr()
const sr = ScrollReveal({ reset: true });

export function configureScrollReveal() {
    sr.reveal(`.${style.apresentacao}, .${style.conhecimentos}, .${style.experiencias}, .${style.projetos}, .${style.experiencia} `, {
        duration: 3000
    });

    //Nome
    sr.reveal(`.${style.nome}`, {
        duration: 4000
    });

    //botao cv
    sr.reveal(`.${style.bt_cv}`, {
        rotate: {x:200, y:0, z:0},
        duration: 4000
    });

    

    //redes
    sr.reveal(`.${style.rede1}`, {
        duration: 3000
    });
    sr.reveal(`.${style.rede2}, .${style.texto}`, {
        duration: 6000
    });
    sr.reveal(`.${style.rede3} `, {
        duration: 9000
    });

    //conhecimentos


    sr.reveal(`.${style.caixa1}`, {
        rotate: {x:200, y:0, z:0},
        duration: 3000
    });
    sr.reveal(`.${style.caixa2}`, {
        rotate: {x:200, y:0, z:0},
        duration: 4000
    });
    sr.reveal(`.${style.caixa3}`, {
        rotate: {x:200, y:0, z:0},
        duration: 5000
    });
    sr.reveal(`.${style.caixa4}`, {
        rotate: {x:200, y:0, z:0},
        duration: 6000
    });
    sr.reveal(`.${style.caixa5}`, {
        rotate: {x:200, y:0, z:0},
        duration: 7000
    });
    

      
}