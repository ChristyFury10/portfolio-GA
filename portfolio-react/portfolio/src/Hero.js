import React from "react";
import "./Hero.css"
import Header from "./components/Header";

function Hero(props) {
  return (
    <div>

      <div  style={{ backgroundColor: "black", backgroundImage: "url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", marginTop: "-100px" }} className="hero-image">
        <div className="container my-5" >
          <div className="row">
            <div className="col-lg-6">
              <img className="headshot" alt="headshot" src="https://i.imgur.com/JAjTSeF.jpg"></img>
            </div>
            <div className="col-lg-6" >
              <div className="p-5 mt-4">
                
                <h1 className="display-4 hero-text bold">Christy Fury</h1>
                
                <p className="lead hero-text">
                  Learn a bit about who I am and see what projects I have been a part of. 
                </p>
                  <Header/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
