import React from 'react'
import CountUp from 'react-countup';

const FunFact = (props) => {
    return (

        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h3><span><CountUp end={12} enableScrollSpy /></span>K+</h3>
                            <h4>Placements</h4>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h3><span><CountUp end={20} enableScrollSpy /></span>+</h3>
                            <h4>Industry Experience</h4>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h3><span><CountUp end={10} enableScrollSpy /></span>K+</h3>
                            <h4>Trained teachers</h4>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h3><span><CountUp end={32} enableScrollSpy /></span>+</h3>
                            <h4>Awards Winner</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;




