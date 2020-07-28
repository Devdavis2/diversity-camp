import React from "react";
// import CC_VSR_2020 from './Images/cc_vsr_2020'
import Home_page from "./Images/Home_page.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home-header responsive-img">
          <h1 className="home-headline container">
            {" "}
            <b className="white-text">Virtual Summer Retreat</b>
          </h1>
          <h5 className="home-sub-healine white-text container">
            <i>Socially Distanced, Culturally Connected</i>
          </h5>
        </div>

        <div className="home-page container">
          <p className="home-copy ">
            <b>Our mission</b> is to connect children (virtually) across diverse
            backgrounds in order to instill empathy and understanding and
            disrupt biases and generalizations by providing exposure to others’
            cultures and experiences and facilitating opportunities for students
            to examine their perceptions of the world.
          </p>

          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_enimh3QpAo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
              Collage Collective Video
            </iframe>
          </div>
          <p>
            <b>
              Want to join us this summer? Please complete this questionnaire!
            </b>
            <br />
            <br />
            <a
              className="applyhere btn purple lighten-2"
              href="https://docs.google.com/forms/d/1TURwfrDC1Knyhqt5Ykeee6bjxJM_eKDlWKWOec1fY2s/viewform?ts=5f0158ca&edit_requested=true"
            >
              Apply Here
            </a>
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Home;
