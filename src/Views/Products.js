import React from "react";
import Navibar from "../Components/Navibar";
import "../assets/css/style.css";
import Footer from "../Components/Footer";
import vntour from "../assets/img/home_page/Big_Project_1.png";
import currency from "../assets/img/products/currency_transfering.JPG";
import google_news from "../assets/img/products/google_news.JPG";
import bkb from "../assets/img/products/rock_paper_keo.JPG";
import weather from "../assets/img/products/weather.JPG";
import Movies from "../assets/img/home_page/react_movies.png";
import Todolist from "../assets/img/home_page/react_todolist.png";
import mountain_2 from "../assets/img/home_page/climb_mountain_2.jpg";
import gold_miner from '../assets/img/products/gold_miner.jpg'

export default function Products() {
  return (
    <div>
      <Navibar />
      <div className="img_title_product"  style={{backgroundImage: `url(${mountain_2})`}}>
      <div className="wrap-text-product">
          <h1 className="text-product">Personal Projects</h1>
        </div>
      </div>
      <div className="page projects-page">
        <section className="portfolio-block projects-cards">
          <div className="container">
            <div className="heading">
              <h2>Recent Work</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="https://vietnamtour.netlify.com">
                    <img
                      className="card-img-top scale-on-hover"
                      src={vntour}
                      alt="Card Zero"
                    />
                  </a>
                  <div className="card-body">
                    <h6>Tour Booking</h6>
                    <button
                      value="Live Website"
                      onClick={() =>
                        (window.location.href =
                          "https://vietnamtour.netlify.com")
                      }
                    >
                      Live Website
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="https://movies-dnp.netlify.com">
                    <img
                      className="card-img-top scale-on-hover"
                      src={Movies}
                      alt="Card First"
                    />
                  </a>
                  <div className="card-body">
                    <h6>Movies</h6>
                    <button
                      value="Live Website"
                      onClick={() =>
                        (window.location.href =
                          "https://movies-dnp.netlify.com")
                      }
                    >
                      Live Website
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="https://todolist-dnp.netlify.com">
                    <img
                      className="card-img-top scale-on-hover"
                      src={Todolist}
                      alt="Card Second"
                    />
                  </a>
                  <div className="card-body">
                    <h6>To Do List</h6>
                    <button
                      value="Live Website"
                      onClick={() =>
                        (window.location.href =
                          "https://todolist-dnp.netlify.com")
                      }
                    >
                      Live Website
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="https://weather-dnp.netlify.com">
                    <img
                      className="card-img-top scale-on-hover"
                      src={weather}
                      alt="Card third"
                    />
                  </a>
                  <div className="card-body">
                    <h6>Weather</h6>
                    <button
                      value="Live Website"
                      onClick={() =>
                        (window.location.href =
                          "https://weather-dnp.netlify.com")
                      }
                    >
                      Live Website
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="https://googlenews-dnp.netlify.com">
                    <img
                      className="card-img-top scale-on-hover"
                      src={google_news}
                      alt="Card fourth"
                    />
                  </a>
                  <div className="card-body">
                    <h6>Google News</h6>
                    <button
                      value="Live Website"
                      onClick={() =>
                        (window.location.href =
                          "https://googlenews-dnp.netlify.com")
                      }
                    >
                      Live Website
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="https://convertmoney-dnp.netlify.com">
                    <img
                      className="card-img-top scale-on-hover"
                      src={currency}
                      alt="Card fifth"
                    />
                  </a>
                  <div className="card-body">
                    <h6>Currency Converter</h6>
                    <button
                      value="Live Website"
                      onClick={() =>
                        (window.location.href =
                          "https://convertmoney-dnp.netlify.com")
                      }
                    >
                      Live Website
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="https://gold-miner-dnp.netlify.com">
                    <img
                      className="card-img-top scale-on-hover"
                      src={gold_miner}
                      alt="Card gold"
                    />
                  </a>
                  <div className="card-body">
                    <h6>Game Gold Miner</h6>
                    <button
                      value="Live Website"
                      onClick={() =>
                        (window.location.href =
                          "https://gold-miner-dnp.netlify.com")
                      }
                    >
                      Live Website
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0">
                  <a href="https://rockpaperscissor-dnp.netlify.com">
                    <img
                      className="card-img-top scale-on-hover"
                      src={bkb}
                      alt="Card sixth"
                    />
                  </a>
                  <div className="card-body">
                    <h6>Rock Paper Scissor</h6>
                    <button
                      value="Live Website"
                      onClick={() =>
                        (window.location.href =
                          "https://rockpaperscissor-dnp.netlify.com")
                      }
                    >
                      Live Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
