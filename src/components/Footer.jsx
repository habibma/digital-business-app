import GitHub from '../assets/github.svg'
import Codepen from '../assets/codepen.svg'
import Linkedin from '../assets/linkedin-icon.svg'
import Whatsapp from '../assets/whatsapp.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <a href='https://github.com/habibma' target='_blank' title='GitHub'><img src={GitHub} alt='GitHub icon'/></a>
            <a href='https://codepen.io/Habib-Mote' target='_blank' title='Codepen'><img src={Codepen} alt='Codepen icon' /></a>
            <a href='https://www.linkedin.com/in/habib-motavassel/' target='_blank' title='LinkedIn'><img src={Linkedin} alt='linkedin icon' /></a>
            <a href='https://wa.me/491622382481' target='blank'><img src={Whatsapp} title='WhatsApp' alt='Whatsapp icon'/></a>
        </div>
    )
}

export default Footer;