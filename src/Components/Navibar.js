import React from 'react'
import '../assets/css/style.css'
import {Link} from 'react-router-dom'

export default function Navibar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div className="container"><a className="navbar-brand logo" href="/">Porfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                    <Link to="/" className="nav-link nav-item" role="presentation">Home</Link>
                    <Link to="/products" className="nav-link nav-item" role="presentation">Projects</Link>
                    <a href={`${process.env.REACT_APP_FilePDF}`} className="nav-link nav-item">CV</a>
                    <Link to="/contact" className="nav-link nav-item" role="presentation">Hire me</Link>
                </ul>
            </div>
        </div>
    </nav>
    )
}
