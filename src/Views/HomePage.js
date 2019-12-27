import React from 'react'
import {useHistory} from 'react-router-dom'
import Navibar from '../Components/Navibar'
import Footer from '../Components/Footer'
import Avatar from '../assets/img/home_page/avatar.jpg'
import vntour from '../assets/img/home_page/Big_Project_1.png'
import Movies from '../assets/img/home_page/react_movies.png'
import imgLaptop from '../assets/img/home_page/image6.png'
import youtubi from '../assets/img/home_page/Youtubi.png'
import '../assets/fonts/ionicons.min.css'

    
export default function HomePage() {
    const history = useHistory()
    return (
        <div>
            <Navibar/>
        <div className="page lanidng-page">
            <section className="portfolio-block block-intro">
                <div className="container">
                    <div className="avatar" style={{backgroundImage:`url(${Avatar})`}}></div>
                    <div className="about-me">
                        <h2 className="mb-3">Front End Developer</h2>
                        <p>Hello! I am <strong>Duc Nguyen</strong>. I work as front end developer. I became really passionate and kept creating perfect website, eye-catching to people, and best flexible websites.</p></div>
                </div>
            </section>
           <section className="portfolio-block photography">
                <div className="container">
                    <h3 className="text-center title--products mb-5"><a className="title--link-products" href="/products">Personal Products</a></h3>
                    <div className="row no-gutters">
                        <div className="col-md-6 col-lg-4 item zoom-on-hover p-2"><a href="https://vietnamtour.netlify.com"><img className="img-fluid image" src={vntour} alt="Viet Nam Tour"/></a></div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover p-2"><a href="https://movies-dnp.netlify.com"><img className="img-fluid image" src={Movies} alt="Movies"/></a></div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover p-2"><a href="https://youtubi.netlify.com"><img className="img-fluid image" src={youtubi} alt="Youtube Share"/></a></div>
                    </div>
                </div>
            </section>
             <section className="portfolio-block call-to-action border-bottom">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center content">
                        <h3>Like what you see?</h3><button className="btn btn-outline-primary btn-lg" type="button" onClick={()=>history.push("/contact")}>Hire me</button></div>
                </div>
            </section>
            <section className="portfolio-block skills">
                <div className="container">
                    <div className="heading">
                        <h2>Special Skills</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0"><i className="icon ion-ios-star-outline"></i></div>
                                <div className="card-body">
                                    <h3 className="card-title">Web Design</h3>
                                    <p className="card-text">Placing and optimizing the content on the web, giving it the necessary structure and form by HTML. Change the fonts, adjust the colors, add/remove backgrounds, and a lot more with CSS .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0"><i className="icon ion-ios-lightbulb-outline"></i></div>
                                <div className="card-body">
                                    <h3 className="card-title">Web Programming</h3>
                                    <p className="card-text">Implementing the front-end logic that defines a web application. Able to connect front end web with the services that reside on the back-end, and ReactJs, javascript library, for flexible website .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0"><i className="icon ion-ios-gear-outline"></i></div>
                                <div className="card-body">
                                    <h3 className="card-title">Back End Programming</h3>
                                    <p className="card-text">Using python to handle request between browsers and servers, connecting database, validation and authentication. Always ready to hand it off to the client .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
            <section className="portfolio-block website gradient">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5 offset-lg-1 text">
                            <h3>Website Project</h3>
                            <p>After 12 week for joining bootcamp at CoderSchool. I am very happy with what i have. Please
                                following my projects here. <button className="btn btn-outline-primary btn-lg" style={{backgroundColor:"aliceblue"}} type="button" onClick={()=>history.push("/products")}>My Projects</button>
                            </p>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="portfolio-laptop-mockup">
                                <div className="screen">
                                    <div className="screen-content" style={{backgroundImage:`url(${imgLaptop})`}}></div>
                                </div>
                                <div className="keyboard"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <Footer/>
        </div>
    )
}
