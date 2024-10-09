import React from "react";
import Link from 'next/link'

const ServiceCard = ({ img, title, sdescription, slug }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
            <div className="services-card">
                <div className="number-shape">
                    <span>01</span>
                    <div className="shape">
                        <svg viewBox="0 0 112 107" fill="none">
                            <path id="Bg5"
                                d="M67.9706 0.555039C89.2118 -0.484865 110.489 16.3952 111.529 37.6365C112.568 58.8777 92.9541 105.645 71.7129 106.685C50.4716 107.725 1.72311 63.4921 0.683209 42.2509C-0.356694 21.0097 46.7293 1.59494 67.9706 0.555039Z" />
                        </svg>
                    </div>
                </div>
                <div className="icon">
                    <img src={img} alt="" />
                </div>
                <h2>{title}</h2>
                <span>{sdescription}</span>
                <h3>
                    <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`${slug}`} >
                        <span>Learn More</span>
                        <i className="ti-arrow-right"></i>
                    </Link>
                </h3>
            </div>
    )
}


export default ServiceCard;

