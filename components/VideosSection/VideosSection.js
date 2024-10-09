import React from "react";
import VidoImg from "/public/images/video-bg.jpg"
import VideoModal from "../ModalVideo/VideoModal";
import Image from "next/image";

const VideosSection = () => {

    return (
        <section className="videos-section">
            <h2 className="d-none">hiddin</h2>
            <div className="container">
                <div className="image">
                    <Image src={VidoImg} alt="" />
                    <VideoModal />
                    <div className="circle-shape-1"></div>
                    <div className="circle-shape-2"></div>
                    <div className="circle-shape-3"></div>
                    <div className="circle-shape-4"></div>
                </div>
            </div>
        </section>
    )
}

export default VideosSection;