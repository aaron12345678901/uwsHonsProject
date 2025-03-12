import facebook from "../generic-img/facebook.png";
import twitter from "../generic-img/twitter.png";
import instagram from "../generic-img/instagram.png";
import footerlogo from "../generic-img/logo-no-background.svg";


const Footer = () => {
    return (
        <div className="Footer">

            <div className="social-media">
                <div className="insta"> 
                   <img src={instagram} alt="Instagram" />
                </div>
                <div className="face"> 
                   <img src={facebook} alt="Facebook" />
                </div>
                <div className="X"> 
                   <img src={twitter} alt="Twitter" />
                </div>
            </div>

            <div className='footer-img'>  <img src={footerlogo} alt="Twitter" /> </div>
        </div>
    );
};

export default Footer;
