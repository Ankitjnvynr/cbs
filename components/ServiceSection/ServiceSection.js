import React from "react";
import Services from "../../api/Services";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard"
import ShapeOn from '/public/images/services/bg.jpeg'
import Image from "next/image";


const ServiceSection = (props) => {


    return (
        <section className={"section-padding " + props.hclass}>
            <div className="top-img">
                <Image src={ShapeOn} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SectionTitle title="Recent Courses" subtitle="Courses" />
                    </div>
                </div>
                <div className="services-wrap">
                    <div className="row">
                        {Services.map((item, sindx) => (
                            <div className="col col-xl-3 col-lg-6 col-md-6 col-12" key={sindx}>
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









