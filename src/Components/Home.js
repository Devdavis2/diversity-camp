import React from "react";
// import CC_VSR_2020 from './Images/cc_vsr_2020'

class Home extends React.Component {
  render() {
    return (
      <div className="home-page container">
        <h1 className="home-headline">
          {" "}
          <b>Virtual Summer Retreat</b>
        </h1>
        <h4> Sub Headline</h4>
        <p className="home-copy">
          <b>Our mission</b> is to connect children (virtually) across diverse
          backgrounds in order to instill empathy and understanding and disrupt
          biases and generalizations by providing exposure to others’ cultures
          and experiences and facilitating opportunities for students to examine
          their perceptions of the world.
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
      </div>
    );
  }
}

export default Home;
