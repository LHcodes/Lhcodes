import Projetos1 from "./projects/Projetos1";
import Projetos2 from "./projects/Projetos2";
import Projetos3 from "./projects/Projetos3";

import style from './Projetos.module.css'


function Projetos() {

    return ( 
        <div className={style.container}>
            <h1>Projetos</h1>
            <div>
                <Projetos1/>
                <Projetos2/>
                <Projetos3/>
            </div>
        </div>
    )
}
export default Projetos