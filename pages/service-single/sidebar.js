import React from 'react'
import Services from '../../api/Services';
import Link from 'next/link'
import ins1 from '/public/images/instragram/i1.jpg'
import ins2 from '/public/images/instragram/i2.jpg'
import ins3 from '/public/images/instragram/i3.jpg'
import ins4 from '/public/images/instragram/i4.jpg'
import ins5 from '/public/images/instragram/i5.png'
import ins6 from '/public/images/instragram/i6.jpg'
import Image from 'next/image';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <div className="col-lg-4 col-md-8">
            <div className="single-sidebar">
                <div className="service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        {Services.slice(0, 5).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="newsletter-widget widget">
                    <h3>Stay Updated with Our Latest Insights!</h3>
                    {/* <p>Subscribe Now!</p> */}
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="text" placeholder="Email Address" />
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>Join Our Community of 20,000+ Subscribers!<Link href="/contact">Privacy Policy</Link></span>
                </div>
                <div className="instagram-widget widget">
                    <h2>Instagram Shot</h2>
                    <ul>
  <li><Image src={ins1} alt="" style={{ width: '150px', height: '100px', objectFit: 'cover' }} /></li>
  <li><Image src={ins2} alt="" style={{ width: '150px', height: '100px', objectFit: 'cover' }} /></li>
  <li><Image src={ins3} alt="" style={{ width: '150px', height: '100px', objectFit: 'cover' }} /></li>
  <li><Image src={ins4} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover' }} /></li>
  <li><Image src={ins5} alt="" style={{ width: '150px', height: '100px', objectFit: 'cover' }} /></li>
  <li><Image src={ins6} alt="" style={{ width: '150px', height: '100px', objectFit: 'cover' }} /></li>
</ul>

                </div>


            </div>
        </div>

    )
}

export default ServiceSidebar;

