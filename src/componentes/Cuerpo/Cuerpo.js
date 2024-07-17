import CampoMain from "../camposMain/campoMain";
import "./Cuerpo.css"

const Cuerpo = (props) =>{
    return <section className="cuerpo">
        <div>
            <h2>Experiencia profesional</h2>
            <CampoMain
                title='Tecnica Pomodoro'
                img="/img/tecPomodoro.jpeg"
                descripcion='Este proyecto es un desafio de encriptar y desencriptar palabras.
                        Página responsive aplicando buenas practicas.
                        Tecnologias utilizadas: HTML5, CSS3 y JavaScript.'
            />        
        </div>        
    </section>


}

export default Cuerpo