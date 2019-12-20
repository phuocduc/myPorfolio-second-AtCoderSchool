import React from 'react'

export default function Footer() {
    return (
        <footer className="page-footer">
        <div className="container">
            <div style={{cursor: "pointer"}} className="links">
                <a href="/">About me</a>
                <a href="/contact">Contact me</a>
                <a href="/products">Projects</a></div>
            <div className="social-icons">
                <a href="/"><i className="icon ion-social-facebook"></i></a>
                <a href="/"><i className="icon ion-social-instagram-outline"></i></a>
                <a href="/"><i className="icon ion-social-twitter"></i></a></div>
        </div>
    </footer>
    )
}
