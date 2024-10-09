import Link from 'next/link'
import logo from '/public/images/peer_logo_white.svg'
import Shape1 from '/public/images/mail.svg'
import News1 from '/public/images/phone.svg'
import News2 from '/public/images/map.svg'
import Image from 'next/image'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}



const Footer = (props) => {


    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={logo} alt="Logo" />
                                </div>
                                <p>Mattis inelit neque quis donec eleifnd amet. Amet sed et cursus eu euismod.
                                    Egestas
                                    in morbi tristique.</p>

                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Acadmics</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Admission</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Latest News</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Carrer</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="#">Admission</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Courses</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Result</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Faq</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <ul>
                                    <li><Image src={Shape1} alt="" /><span>ceo@cbscolleges.com</span>
                                    </li>
                                    <li><Image src={News1} alt="" /> <span>+91-8053111222-666
                                        </span></li>
                                    <li><Image src={News2} alt="" /><span>8 KM. Mile Stone, Jhajjar-Kosli Raod, <br />
                                    Fatehpuri , Jhajjar Delhi-NCR (Haryana)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2024 Manit by <Link onClick={ClickHandler} href="/">BigByte Innovations Pvt. Ltd</Link>. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul>
                                <li><Link onClick={ClickHandler} href="/">privacy & Policy</Link></li>
                                <li><Link onClick={ClickHandler} href="/">Terms</Link></li>
                                <li><Link onClick={ClickHandler} href="/">About us</Link></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;

