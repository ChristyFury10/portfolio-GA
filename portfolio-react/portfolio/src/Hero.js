import React from "react";
import "./Hero.css"

function Hero(props) {
  return (
    <div>

      <div  style={{ backgroundColor: "purple", backgroundSize: "100%", backgroundImage: "url('https://i.imgur.com/PM1nLOU.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", marginTop: "-100px" }}>
        <div class="container my-5" >
          <div class="row">
            <div class="col-lg-6">
              {/* <img
                class="w-100 shadow"
                src="https://via.placeholder.com/824x552"
              /> */}
            </div>
            <div class="col-lg-6" >
              <div class="p-5 mt-4">
                <h1 class="display-4 hero-text">H1 Heading</h1>
                <p class="lead hero-text">
                  Crow's nest schooner ho scallywag hail-shot gabion salmagundi.
                  Doubloon careen code of conduct lugsail hulk ye long clothes.{" "}
                </p>
                <a href="#" class="btn btn-outline-dark">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
