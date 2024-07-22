import "./campoMain.css"
import { Boton } from "../Boton/boton";
const CampoMain=({img,title, descripcion, repo, demo})=>{
    return <div className="campo-main">
        <img src={img}/>
        <div>
            <h3 className="title">{title}</h3>
            <p >{descripcion}</p>

            <div className="btn">     
            <Boton
                enlace={repo}
                name='Repositorio'
            />
            <Boton
                enlace={demo}
                name='Demo'
            />
            </div>   
        </div>
    </div>
}

export default CampoMain