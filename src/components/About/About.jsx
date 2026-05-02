import { LogoName } from "../components"

function About() {
    return (
        <div id='about'>
            <h1>About</h1>
            <p>Blurb about me</p>
            <ul>
                <li><LogoName /></li>
                <li><LogoName /></li>
                <li><LogoName /></li>
            </ul>
        </div>
    )
}

export default About