import GitHub from '../assets/github.svg'
import Codepen from '../assets/Codepen.svg'
import Linkedin from '../assets/linkedin icon.svg'
import Whatsapp from '../assets/Whatsapp.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <a href='https://github.com/habibma' target='_blank' title='GitHub'><img src={GitHub}/></a>
            <a href='https://codepen.io/Habib-Mote' target='_blank' title='Codepen'><img src={Codepen} /></a>
            <a href='https://www.linkedin.com/in/habib-motavassel/' target='_blank' title='LinkedIn'><img src={Linkedin} /></a>
            <a href='https://wa.me/491622382481' target='blank'><img src={Whatsapp} title='WhatsApp'/></a>
        </div>
    )
}

export default Footer;