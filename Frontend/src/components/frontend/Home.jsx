import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/header';
import Footer from '../common/Footer';
import CivilImg from '../../assets/images/construction1.jpg'
import IndustryImg from '../../assets/images/construction2.jpg'
import SpecialtyImg from '../../assets/images/construction122 (2).jpg'
import BuildingImg from '../../assets/images/construction4.jpg'

const Home = () => {
  return (
    <>
        <Header />
        <main>
            {/* Hero section */}
            <section className='section-1'>
                <div className='hero d-flex align-items-center'>
                    <div className='container-fluid'>
                        <div className='text-center'>
                            <span>Welcome Amazing Constructions</span>
                            <h1>Crafting dreams with <br /> precision and excellence.</h1>
                            <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br /> attention to detail. With years of experience and a dedication to quality.</p>
                            <div className='mt-4'>
                                <a className='btn btn-primary'>Contact Now</a>
                                <a className='btn btn-secondary ms-2'>View Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us section */}
            <section className='section-2 py-5'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={AboutImg} className='w-100'/>
                        </div>

                        <div className='col-md-6'>
                            <span>about us</span>
                            <h2>Crafting structures that last a lifetime</h2>

                            <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.</p>

                            <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services section */}
            
            <section className='section-3 bg-light py-5'>
                <div className='container-fluid py-5'>
                    <div className='section-header text-center'>
                        <span>our services</span>
                        <h2>Our construction services</h2>
                        <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={CivilImg} alt="" className='w-100'/>
                                </div>
                                
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Civil Construction</h3>
                                    </div>

                                    <div className='service-content'>
                                        <p>Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={SpecialtyImg} alt="" className='w-100'/>
                                </div>

                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Specialty Construction</h3>
                                    </div>

                                    <div className='service-content'>
                                        <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={IndustryImg} alt="" className='w-100'/>
                                </div>

                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Industrial Construction</h3>
                                    </div>

                                    <div className='service-content'>
                                        <p>Industrial construction is a specialized sector within the construction industry that focuses on the design, development, and construction of facilities for industrial use.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={BuildingImg} alt="" className='w-100'/>
                                </div>

                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Building Construction</h3>
                                    </div>

                                    <div className='service-content'>
                                        <p>Building construction is a broad and essential sector within the construction industry that focuses on the creation of structures designed for human occupancy and use.</p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Home