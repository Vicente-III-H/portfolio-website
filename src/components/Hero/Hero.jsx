import { SocialIconButton } from '../components'
import './Hero.css'

function Hero() {
    return (
        <div id='hero'>
            <h1>Hi, I'm Vicente</h1>
            <p>frontend developer</p>
            <ul>
                <li><SocialIconButton /></li>
                <li><SocialIconButton /></li>
                <li><SocialIconButton /></li>
            </ul>
        </div>
    )
}

export default Hero