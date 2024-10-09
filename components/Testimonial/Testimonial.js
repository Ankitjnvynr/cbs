import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial/1.jpg'
import ts2 from '/public/images/testimonial/2.jpg'
import ts3 from '/public/images/testimonial/3.jpg'
import quote from '/public/images/testimonial/quote.svg'


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Purus eget consectur massa amet. Hac diam suspen disse faucibus posuere dignissim amet at. Eget vitae magna condimentum tristique scelerisque",
        Title: 'Abdul Adl',
        Sub: "President of BPT",
    },
    {
        id: '02',
        tImg: ts2,
        Des: "Purus eget consectur massa amet. Hac diam suspen disse faucibus posuere dignissim amet at. Eget vitae magna condimentum tristique scelerisque",
        Title: 'Falih Zubayr',
        Sub: "President of TBP",
    },
    {
        id: '03',
        tImg: ts3,
        Des: "Purus eget consectur massa amet. Hac diam suspen disse faucibus posuere dignissim amet at. Eget vitae magna condimentum tristique scelerisque",
        Title: 'Abdul Mumin',
        Sub: "President of AML",
    }
]

const Testimonial = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: true,

            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        },
    ]
    };


    return (
        <section className="testimonial-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                        <div className="section-title">
                            <h2>Testimonial</h2>
                            <h3>What Our Donor Says</h3>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slider">
                    <Slider {...settings}>
                        {
                            testimonial.map((tesmnl, tsm) => (
                                <div className="testimonial-card" key={tsm}>
                                    <div className="top-content">
                                        <div className="image">
                                            <img src={tesmnl.tImg} alt="" />
                                        </div>
                                        <div className="title">
                                            <h2>{tesmnl.Title}</h2>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                    </div>
                                    <p className="text">
                                        “{tesmnl.Des}”
                                    </p>

                                    <div className="icon">
                                        <img src={quote} alt="icon" />
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;