
import Link from "next/link";
import Picon from "/public/images/project/icon-arrow.svg"
import Picon1 from "/public/images/project/icon-bg.svg"
import Image from "next/image";
const ProjectCard = ({ Pimg, Psubtitle, Ptitle, Pslug }) => {
    const ClickHandlar = () => {
        window.scrollTo(10, 0);
    }
    return(
        <div className="project-card">
            <div className="image " style={{width:"35rem",height:"19rem"}}>
                <Image src={Pimg} alt="" />
            </div>
            <div className="content opacity-100 rounded-sm" style={{width:"25rem",height:"7.5rem"}}>
                <span>{Psubtitle}</span>
                <h2>{Ptitle}</h2>
                <Link onClick={ClickHandlar} href={'/project-single/[slug]'} as={`/${Pslug}`} className="project-link">
                    <div className="icon">
                        <Image src={Picon} alt="" />
                    </div>
                    <div className="shape">
                        <Image src={Picon1} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;