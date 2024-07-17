import "./campoMain.css"

const CampoMain=(props)=>{
    return <div className="campo-main">
        <img src={props.img}/>
        <div>
            <h2>{props.title}</h2>
            <p>{ props.descripcion}</p>
        </div>
        

    </div>
}

export default CampoMain