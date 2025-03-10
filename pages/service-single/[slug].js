import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import simg1 from '/public/images/service-single/l1.jpg'
// import simg2 from '/public/images/service-single/l2.jpg'
import Footer from '../../components/footer/Footer';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Logo from '/public/images/peer_logo_white.png'
import Phone from '/public/images/telephone.svg'
import Accordion from './accordion';
import Image from 'next/image';

const ServiceSinglePage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone}/>
            <PageTitle pageTitle={serviceDetails?.title} pagesub={'Service'} />
            <section className="service-single-section section-padding">
                <div className="container">
                    <h1>Learn More about Courses  </h1>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="service-single-wrap">
                                <div className="service-single-content">
                                    <Image src={serviceDetails?.sSImg} alt="" />
                                    <div className="service-single-content-des">
                                        <h2>{serviceDetails?.title}</h2>
                                        <p>Pursuing higher education through programs like B.Tech, M.Tech, BBA, and MBA offers diverse pathways
                                             tailored to individual career aspirations. A Bachelor of Technology (B.Tech) provides a solid foundation 
                                             in engineering disciplines, preparing students for technical roles across various industries. For those seeking advanced expertise, a Master of Technology (M.Tech) delves deeper into specialized engineering fields, fostering research and development skills essential for innovation. Alternatively, a Bachelor of Business Administration (BBA) focuses on imparting fundamental business and management principles, equipping graduates for roles in corporate management and entrepreneurship. Building upon this, a Master of Business Administration (MBA) enhances strategic thinking and leadership abilities, opening doors to senior management positions and diverse business opportunities. Each of these programs offers unique advantages, 
                                            enabling individuals to align their education with their professional goals.  </p>
                                        <p>Embarking on the journey of higher education is a transformative endeavor that unlocks a world of opportunities. 
                                            It equips individuals with the knowledge and skills necessary to navigate and excel in an ever-evolving landscape. 
                                            As Nelson Mandela wisely stated, "Education is the most powerful weapon which you can use to change the world." 
                                            This path not only fosters personal growth but also empowers one to make meaningful contributions to society. </p>
                                        <div className="service-single-sub-img">
                                            <ul>
                                                <li><Image src={simg1} alt="" /></li>
                                                {/* <li><Image src={simg2} alt="" /></li> */}
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="solutions-section">
                                    <h2>Our Solutions</h2>
                                    <div className="row">
                                        {Services.slice(0,3).map((sitem,sky) => (
                                        <div className="col-lg-4 col-md-6 col-12" key={sky}>
                                            <div className="solutions-item">
                                                <div className="solutions-icon">
                                                    <div className="icon">
                                                        <Image src={sitem.sImg} alt="" />
                                                    </div>
                                                </div>
                                                <div className="solutions-text">
                                                        <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${sitem.slug}`}>{sitem.title}</Link></h2>
                                                        <p>{sitem.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="benefits-section">
                                    <h2>Benefits</h2>
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <div className="benefits-item">
                                                <Accordion />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar /> 
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default ServiceSinglePage;