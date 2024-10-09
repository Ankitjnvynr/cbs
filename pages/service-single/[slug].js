import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import simg1 from '/public/images/service-single/img-1.jpg'
import simg2 from '/public/images/service-single/img-2.jpg'
import Footer from '../../components/footer/Footer';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Logo from '/public/images/logo-2.svg'
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
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone}/>
            <PageTitle pageTitle={serviceDetails?.title} pagesub={'Service'} />
            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="service-single-wrap">
                                <div className="service-single-content">
                                    <Image src={serviceDetails?.sSImg} alt="" />
                                    <div className="service-single-content-des">
                                        <h2>{serviceDetails?.title}</h2>
                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and
                                            praising pain was born and I will give you a complete account of the system, and
                                            expound the actual teachings of the great explorer of the truth, the
                                            master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                                            itself, because it is pleasure, but because those who do not know how to pursue
                                            pleasure rationally encounter consequences that are extremely painful. </p>
                                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of
                                            itself, because it is pain, but because occasionally circumstances occur in
                                            which toil and pain can procure him some great pleasure. To take a trivial
                                            example, which of us ever undertakes laborious physical exercise.</p>
                                        <div className="service-single-sub-img">
                                            <ul>
                                                <li><Image src={simg1} alt="" /></li>
                                                <li><Image src={simg2} alt="" /></li>
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