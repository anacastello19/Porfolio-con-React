import './Header.css'

function Header(){
    return <header className="header">
        <img src='/img/logo.jpeg'/>
        <ul class="nav-list">
            <li><a href="https://anacastello19.github.io/Porfolio/"><span>Sobre Mi</span></a></li>
            <li><a href="https://anacastello19.github.io/Porfolio/skills.html"><span>Skills</span></a></li>
            <li><a href="https://anacastello19.github.io/Porfolio/hobbies.html"><span>Hobbies</span></a></li>
            <li><a href="https://anacastello19.github.io/Porfolio/formacion.html"><span>Formacion</span></a></li>
            <li><a href="experienciaProfesional.html"><span>Experiencia profesional</span> </a></li>
        </ul>
    </header>
     
}

export default Header