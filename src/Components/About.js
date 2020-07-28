import React from "react";
import Lauren from "./Images/lauren.png";
import Jena from "./Images/jena.png";
import Kevin from "./Images/kevin.png";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="about-header white-text">
          <b>About Us</b>
        </h1>

        <p>
          Recent events have exposed the racial tensions that exist as a result
          of the longstanding injustices that have been in place for people of
          color. Many of these injustices have resulted from the biases that are
          perpetuated when a person has limited opportunities for interaction
          with people outside of their own race and culture. Simultaneously, due
          to the COVID-19 pandemic and closure of schools we, like most
          teachers, have had to develop the unique skill set of teaching kids
          remotely. We saw students thrive in unimaginable ways and realized
          that this virtual learning model could be used to facilitate
          connections for students across varied demographics.
          <br />
          <br />
          Collage Cooperative holds the belief that systemic change can occur if
          students create and maintain a deeper understanding of people of other
          cultures, races, and backgrounds. We are leveraging technology to give
          students an authentic experience to work with others who, because of
          geography, they may not have interacted with otherwise. We want to
          work alongside families to reinforce their values and foster a
          well-rounded view of the world. Ultimately, we aim to create a safe
          space for students to learn with and from diverse educators and peers.
        </p>

        <p>
          <b>
            The instructors at Collage Cooperative have over 25 years of
            combined teaching experience in public and charter schools.
          </b>
          <br />
          <br />
          <img className="Lauren" src={Lauren}></img>
          <br />
          <b>Lauren Foltz</b> - holds a Bachelor of Arts in Education from
          Wheaton College, IL, and a Master of Educational Leadership from
          Concordia University Chicago. She has been teaching upper elementary
          students at public and charter schools for a total of 13 years, first
          in southwest Chicago and later in Harlem, New York.
          <br />
          <br />
          <img className="Jena" src={Jena}></img>
          <br />
          <b>Jena Wilson</b> - holds a Bachelors of Science in Communication
          Disorders from Southern Connecticut State University and a Masters of
          Arts in Elementary Education from University of New Haven. She has
          taught in Middle School and Elementary Schools in Connecticut and New
          York.
          <br />
          <br />
          <img className="Kevin" src={Kevin}></img>
          <br />
          <b>Kevin Weah</b> - holds a Bachelors of Arts in Humanities from
          Montclair State University and a Masters in Elementary Education from
          Relay Graduate School. He has taught in Middle Schools and Elementary
          Schools in New Jersey and New York.
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    );
  }
}

export default About;
