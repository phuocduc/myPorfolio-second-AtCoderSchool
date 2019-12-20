import React, { useState } from "react";
import Navibar from "../Components/Navibar";
import Footer from "../Components/Footer";
import {useAlert} from 'react-alert'

export default function Contact() {
  
  const [contact, setContact] = useState({});
  const alert = useAlert()
  const handleSubmit = async (e) =>{
      console.log(process.env.REACT_APP_API_URL,'sssss')
      e.preventDefault()
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact_porfolio`,{
        method:"POST",
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(contact)
      })

      const data = await response.json()
      if (data.state === "success")
      {
        alert.show("I will contact you sooner!",{
          type:'success'
        })
      }

  }
  return (
    <div>
      <Navibar />
      <main className="page hire-me-page">
        <section className="portfolio-block hire-me">
          <div className="container">
            <div className="heading">
              <h2>Hire Me</h2>
            </div>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className="form-group">
                <label>Subject</label>
                <input className="form-control" type="text" id="subject" 
                onChange={(e)=>setContact({...contact, title:e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" id="email" 
                onChange={(e)=>setContact({...contact, email:e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" id="message"
                onChange={(e)=>setContact({...contact, comment:e.target.value})}
                ></textarea>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <label>Date</label>
                    <input className="form-control" id="hire-date" type="date" 
                    onChange={(e)=>setContact({...contact, date:e.target.value})}
                    />
                  </div>
                  <div className="col-md-6 button">
                    <button className="btn btn-primary btn-block" type="submit">
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
