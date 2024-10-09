import Slider from 'react-slick';
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from '../ProjectSection/ProjectCard';
import Projects from "../../api/projects";


const ProjectSection2 = (props) => {



    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        },

        ]
    };


    return (
        <section className="project-section-s2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SectionTitle subtitle="Recent Case Studies" title="Our Latest Case Studies" />
                    </div>
                </div>
            </div>
            <div className="project-slider-s2" >
                <Slider {...settings}>
                    {Projects.map((item, Pindx) => (
                        <div key={Pindx}>
                            <ProjectCard Pimg={item.pimg1} Psubtitle={item.subtitle} Ptitle={item.title} Pslug={item.slug} />
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    )
}

export default ProjectSection2;











