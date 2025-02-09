import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import WhatsAppChat from './WhatsAppChat';



const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li>
                        <AnchorLink href='#__next'>
                            <i className="ti-arrow-up"></i>
                        </AnchorLink>
                      
                      
                    </li>
                </ul>
                <div className="waChatbtn">

                   
                </div>
            </div>
        </div>
    );
}

export default Scrollbar;
