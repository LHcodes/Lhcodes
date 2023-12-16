import { useEffect } from "react";

const botao = () => {
    useEffect(() =>{
        
        const bt_c = document.getElementById('bt-c')
        const bt_s = document.getElementById('bt-s')
        const display_c = document.getElementById('display-c')
        const display_s = document.getElementById('display-s')

        bt_s.addEventListener('click', clicar_s)
        bt_c.addEventListener('click', clicar_c)

        function clicar_c() {
            display_c.style.display= 'block'
            display_s.style.display= 'none'

            bt_c.style.backgroundColor= '#2e2e2e'
            bt_s.style.backgroundColor= 'transparent'
        }

        function clicar_s() {
            display_c.style.display= 'none'
            display_s.style.display= 'block'

            bt_c.style.backgroundColor= 'transparent'
            bt_s.style.backgroundColor= '#2e2e2e'
        }
        
    })
}

export default botao