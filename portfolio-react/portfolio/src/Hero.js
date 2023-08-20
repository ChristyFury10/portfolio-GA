import React from "react";
import "./Hero.css"
import Header from "./components/Header";

function Hero(props) {
  return (
    <div className="hero-cont hero-image" style={{ backgroundColor: "black", backgroundImage: "url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", marginTop: "-100px" }} >

        <div className="container my-5" >
            <div className="col-lg-6">
              <img className="headshot" alt="headshot" src="https://i.imgur.com/JAjTSeF.jpg"></img>
            </div>
              <div className="p-5 mt-4">
                
                <h1 className="display-4 hero-text bold">Christy Fury</h1>
                
                <p className="lead hero-text">
                  Learn a bit about who I am and see what projects I have been a part of. 
                </p>
                  <Header/>
              </div>
          
        </div>
      

{/* <div class="container col-xxl-8 px-4 py-5 hero-image" style={{ backgroundColor: "black", backgroundImage: "url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", marginTop: "-100px" }} >
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://i.imgur.com/JAjTSeF.jpg" class="d-block mx-lg-auto img-fluid headshot" alt="headshot" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 hero-text bold">Christy Fury</h1>
        <p className="lead hero-text">
                  Learn a bit about who I am and see what projects I have been a part of. 
                </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <Header/>
        </div>
      </div>
    </div>
  </div> */}

    </div>
  );
}

export default Hero;
