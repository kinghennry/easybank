import './Footer.css'
import logoDark from "./logo-dark.svg"
import facebook from "../images/icon-facebook.svg"
import youtube from "../images/icon-youtube.svg"
import twitter from "../images/icon-twitter.svg"
import pintrest from "../images/icon-pinterest.svg"
import instagram from "../images/icon-instagram.svg"
const Footer = () => {
    return (
        <footer>
                <div className="footer__grid">
                    <a href="" className="footer__logo">
                <img src={logoDark} alt=""/>
                </a>
                <div className="footer__social">
                <a href="" ><img src={facebook} alt=""/></a>
                <a href="" ><img src={youtube} alt=""/></a>
                <a href="" ><img src={twitter} alt=""/></a>
                <a href="" ><img src={pintrest} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
                </div>
                <div className="footer__links col1">
                    <a href="">About Us</a>
                    <a href="">Contact</a>
                    <a href="">Blog</a>
                </div>
                <div className="footer__links col2">
                    <a href="">Careers </a>
                    <a href="">Support</a>
                    <a href="">Privacy Policy</a>
                </div>
                <div className="footer__copyright">
                    &copy; EasyBank. All Rights Reserved
                </div>
                </div>
        </footer>
    )
}

export default Footer
