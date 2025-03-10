import Slider from 'react-slick';
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard1 from './ProjectCard1';
import Projects from "./projects";


const ProjectSection1 = (props) => {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        speed: 500,
        dots: true,
        arrows:false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    // centerMode: true,
                }
            }
        ]
    };


    return (
        <section className={"section-padding " + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SectionTitle subtitle="Student Corner" title="Facilities @ CBS Colleges" />
                    </div>
                </div>
            </div>
            <div className="project-slider" >
                <Slider {...settings}>
                    {Projects.map((item, Pindx) => (
                        <div key={Pindx} >
                            <ProjectCard1 Pimg={item.pimg1} Psubtitle={item.subtitle} Ptitle={item.title} Pslug={item.slug} />
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    )
}

export default ProjectSection1;











