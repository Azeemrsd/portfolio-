import React, { Component } from "react";
import logo1 from "../../react-icon.svg";
import logo2 from "../../angular-icon.svg";
import logo3 from "../../responsive-icon.svg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import logo4 from "../../Node.js-logo.svg";
class Speciality extends Component {
  state = {
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  };
  render() {
    return (
      <div>
        <h1 className="font-italic text-center text-capitalize">
          <i className="fa fa-trophy" style={{ color: "purple" }}></i>
          Things of experties
        </h1>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          responsive={this.state.responsive}
          autoplay
        >
          {console.log(this.state.responsive)}
          <div class="item ">
            <img
              src={logo3}
              alt="React"
              style={{ width: "64px", height: "64px", margin: "auto" }}
            />
            <h4 className="font-italic">Responsive Web Design</h4>
            <p>
              The most important part of a web developer is to make their design
              completely responsive as of 48.91 percent of web traffic is used
              by mobiles.
            </p>
          </div>
          <div class="item">
            <img
              src={logo1}
              alt="React"
              style={{ width: "64px", height: "64px", margin: "auto" }}
            />
            <h4 className="font-italic">React</h4>
            <p>
              The most popular javaScript library in 2018-19 has got millions of
              downloads. As a developer it is my passion and interest to learn
              such an amazing library.{" "}
            </p>
          </div>
          <div class="item">
            <img
              src={logo2}
              alt="React"
              style={{ width: "64px", height: "64px", margin: "auto" }}
            />
            <h4 className="font-italic">Angular</h4>
            <p>
              The Google owned javaScript framework which is very popular for
              it's two-way binding of data makes me greedy to learn it. As a
              developer I have perfect grip on the technologies that are
              powerful like Angular.
            </p>
          </div>
          <div class="item">
            <img
              src={logo4}
              alt="React"
              style={{ width: "64px", height: "64px", margin: "auto" }}
            />
            <h4 className="font-italic">Nodejs</h4>
            <p>
              {" "}
              As Node.js lets developers use JavaScript to write command line
              tools and for running scripts server-side this would be the
              amazing User Experience that produce dynamic web page content
              before the page is sent to the user's web browser.
            </p>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Speciality;
