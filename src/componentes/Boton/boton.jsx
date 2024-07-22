import './boton.css'

export const Boton=({enlace, name})=>{
        
    return <button className='btn' >
                <a className='enlace' href={enlace}>{name}</a>
            </button>
}

