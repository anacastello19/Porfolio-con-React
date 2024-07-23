import CampoMain from "../camposMain/campoMain";
import "./Cuerpo.css"
// import {Link} from 'react-dom'

const Cuerpo = () =>{
    //clg= console.log()
    // console.log('Chequenado',props)
    return <section className="cuerpo">
        <div>
            <h2>Experiencia profesional</h2>
            <CampoMain
                title='Tecnica Pomodoro'
                img="/img/tecPomodoro.jpeg"
                descripcion='Este proyecto se trata de hacer una forma de estudios con descansos cronometrado.
                        Tecnologias utilizadas: JavaScript.'
                repo='https://github.com/anacastello19/t-cnica-Pomodoro'
                demo='https://anacastello19.github.io/t-cnica-Pomodoro/' 
            />     

            <CampoMain
                title='Space App'
                img="/img/APIs.jpeg"
                descripcion='Este proyecto practicas y apredizaje para usar APIs.
                        Tecnologias utilizadas: JavaScript.'
                repo='https://github.com/anacastello19/Curso-Api'
                demo='https://anacastello19.github.io/Curso-Api/' 
            />   

            <CampoMain
                title='Encriptador'
                img="/img/encriptador.jpeg"
                descripcion='Este proyecto es un desafio de encriptar y desencriptar palabras.
                    Pagina responsive aplicando buenas practicas.
                    Tecnologias utilizadas: HTML5, CSS3 y JavaScript.'
                repo='https://github.com/anacastello19/Encriptador'
                demo='https://anacastello19.github.io/Encriptador/' 
            />     

            <CampoMain
                title='Barberia'
                img="/img/barberia.jpeg"
                descripcion='Creacion de página principal, contacto y productos.
                    Tecnologías utilizadas: HTML5 y CSS3.'
                repo='https://github.com/anacastello19/Barberia-Alura'
                demo='' 
            /> 
            <CampoMain
                title='Juego del numero secreto!'
                img="/img/numsecreto.jpeg"
                descripcion='Creacion de página principal, contacto y productos.
                    Tecnologías utilizadas: HTML5 y CSS3.'
                repo='https://github.com/anacastello19/JuegoNumeroSecreto'
                demo='https://anacastello19.github.io/JuegoNumeroSecreto/' 
            />  
            <CampoMain
                title='EcoEncuentro-Inkua'
                img="/img/ecoEncuentro.jpeg"
                descripcion='Plataforma que dedica a fomentar la participación en actividades de voluntariado relacionadas con el medio ambiente.
                        Planificamos y diseñamos la pagina con Figma, generando pagina de registro, inicio, inicio de sesión, etc.
                        Tecnologías utilizadas: HTML, CSS, JavaScript y Boostrap.'
                repo='https://github.com/xNatzhu/EcoEncuentro-Inkua'
                demo='https://eco-encuentro.netlify.app/' 
            />  
        </div>

    </section>


}

export default Cuerpo