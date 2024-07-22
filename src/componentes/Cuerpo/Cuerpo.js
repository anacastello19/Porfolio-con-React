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
                descripcion='Este proyecto es un desafio de encriptar y desencriptar palabras.
                        Página responsive aplicando buenas practicas.
                        Tecnologias utilizadas: HTML5, CSS3 y JavaScript.'
                repo='https://www.youtube.com/watch?v=NxvXnLIf--I&list=PLSel5e2j7Bz2w-iGM-wSk2b46ZS9XBzQT&index=40'
                demo='https://es.legacy.reactjs.org/community/courses.html' 
            />       
        </div>
        {/* <Link to="https://www.google.com.ar/" target="_blank">Ir a Google </Link> */}

    </section>


}

export default Cuerpo