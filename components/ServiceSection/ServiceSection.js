import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard"
import ShapeOn from '/public/images/services/bg.jpeg'
import Image from "next/image";

import simg1 from '/public/images/services/icon-1.svg'
import simg2 from '/public/images/services/icon-2.svg'
import simg3 from '/public/images/services/icon-3.svg'
import simg4 from '/public/images/services/icon-4.svg'
import sSimg1 from '/public/images/service-single/1.jpg'
import sSimg2 from '/public/images/service-single/2.jpg'
import sSimg3 from '/public/images/service-single/3.jpg'
import sSimg4 from '/public/images/service-single/4.jpg'


const ServiceSection = (props) => {
    const Services = [
        {
           Id: '3',
           sImg: simg1,
           sSImg: sSimg1,
           title: 'BBA',
           slug: '/academic/under-graduate/bba',
           description: 'BBA or Bachelor of Business Administration refers to the bachelor’s degree course in business..',
        },
        {
           Id: '6',
           sImg: simg2,
           sSImg: sSimg2,
           title: 'MBA',
           slug: 'academic/post-graduate/master-of-business-administration',
           description: 'The MBA programme offered at the college imparts a global outlook, equips the students with specialized..',
        },
        {
           Id: '1',
           sImg: simg3,
           sSImg: sSimg3,
           title: 'BTECH',
           slug: '/academic/under-graduate/b.Tech-b.tech-leet',
           description: 'The pace of technological innovation will continue to be rapid and accelerating in the new millennium.',
        },
        {
           Id: '4',
           sImg: simg4,
           sSImg: sSimg4,
           title: 'MTECH',
           slug: '/academic/post-graduate/master-of-computer-application',
           description: 'Master of Engineering or Master of Technology degree is a postgraduate program in engineering or technology.',
        },
        {
           Id: '2',
           sImg: simg4,
           sSImg: sSimg4,
           title: 'BCA',
           slug: '/academic/under-graduate/bca',
           description: 'Fast growing information technology and communication system have become critical components..',
        },
        {
           Id: '5',
           sImg: simg4,
           sSImg: sSimg4,
           title: 'MCA',
           slug: '/academic/post-graduate/master-of-computer-application',
           description: 'MCA is a course exclusively designed to meet the IT industry requirements. The well balanced course..',
        },
      
     ]
     Services.sort((a, b) => (a.Id > b.Id) ? 1 : -1)
     


    return (
        <section className={"section-padding " + props.hclass}>
            <div className="top-img">
                <Image src={ShapeOn} alt="" />
            </div>
            <div className="container" >
                <div className="row justify-content-center" >
                    <div className="col-12" >
                        <SectionTitle title="Our Courses" subtitle="-----" />
                    </div>
                </div>
                <div className="services-wrap">
                    <div className="row">
                        {Services.map((item, sindx) => (
                            <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={sindx} style={{paddingTop:"20px"}}>
                                <ServiceCard key={sindx} title={item.title} img={item.sImg} slug={item.slug} sdescription={item.description} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ServiceSection;









