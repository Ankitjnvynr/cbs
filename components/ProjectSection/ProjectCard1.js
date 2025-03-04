import Link from "next/link";
import Picon from "/public/images/project/icon-arrow.svg"
import Picon1 from "/public/images/project/icon-bg.svg"
import Image from "next/image";

const ProjectCard1 = ({ Pimg, Psubtitle, Ptitle, Pslug }) => {
    const ClickHandlar = () => {
        window.scrollTo(10, 0);
    }
    return(
        <div className="project-card">
            <div className="image" >
                <Image src={Pimg} alt="" layout="responsive" width={100} height={100} />
            </div>
            <div className="content opacity-100 rounded-sm" >
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
            <style jsx>{`
                .project-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
                }
                .image {
                    width: 90%;
                    max-width: 40rem;
                    height: auto;
                }
                .content {
                    width: 85%;
                    max-width: 50rem;
                    text-align: left;
                    padding: 1rem;
                    margin-left:18px;
                }
                .project-link {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @media (max-width: 1399px) {
                .image img {
                    width: 80%;
                    margin-top: 20px;
                }
                .project-card .content {
                    width: 80%;
                    margin-left: 38px;
                }
                }

                @media (max-width: 1024px) {
                   .image img{
                    width:100%;
                    margin-top:20px;
                    }
                   .project-card .content{
                     width:78%;
                     margin-left:10%;
                     }
                }

                 @media (max-width: 865px) {
                   .image img{
                    width:100%;
                    margin-top:20px;
            }
                   .project-card .content{
                     width:85%;
                     margin-left:2%;
                     }
                }

                @media (max-width: 768px) {
                    .image img{
                    width:100%;
                    margin-top:20px;    
                }
                    .project-card .content{
                     width:70%;
                     margin-left:120px;
                     }
                 }

                 @media (max-width: 575px ) {
                 .project-card{
                 margin-top:60px;
                 }
                    .image img{
                    width:75%;
                    margin-top:90px;    
                }
                    .project-card .content{
                     width:85%;
                     margin-left:50px;
                     }
                 }


                @media (max-width: 456px) {
                    .image img{
                    width:100%;
                    margin-top:90px;    
                }
                    .project-card .content{
                     width:85%;
                     margin-left:35px;
                     }
                }

                //  @media (max-width: 400px) {
                //     .image img{
                //     width:100%;
                //     margin-top:90px;    
                // }
                //     .project-card .content{
                //      width:85%;
                //      margin-left:35px;
                //      }
                // }

                @media (max-width: 376px) {
                    .image img{
                    width:100%;
                    margin-top:90px;    
                }
                    .project-card .content{
                     width:88%;
                     margin-left:33px;
                     }
                }

               
                    
               


                

                // @media (max-width: 480px) {
                //     .content {
                //         padding: 0.5rem;
                //     }
                //     .image {
                //         height: 12rem;
                //     }
                // }

                //    @media (max-width: 375px) {
                //    .project-card {
                //     display: flex;
                //     flex-direction: row;
                //     align-items: center;
                //     padding: 1rem;
                // }
                //     .image {
                //         width: 27rem;
                //         height: 10rem;
                //     }
                //     .content {
                //         max-width: 100%;
                //         padding: 0.25rem;
                //     }
                //     .content h2 {
                //         font-size: 1rem;
                //     }
                //     .project-link .icon, .project-link .shape {
                //         width: 20px;
                //         height: 20px;
                //     }
                // }
            `}</style>
        </div>
    )
}

export default ProjectCard1;