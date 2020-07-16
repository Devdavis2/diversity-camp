import React from 'react'
// import CC_VSR_2020 from './Images/cc_vsr_2020'

class Home extends React.Component {
    render () {
        return (
            <div className = "home-page container">
                <h1> Virtual Summer Retreat</h1>
                <h4> Sub Headline</h4>
                <p><b>Our mission</b> is to connect children (virtually) across diverse backgrounds in order to instill empathy 
                and understanding and disrupt biases and generalizations by providing exposure to others’ cultures and
                experiences and facilitating opportunities for students to examine their perceptions of the world.</p>

                <iframe width="560" height="315" src="https://drive.google.com/file/d/12mh9Uh1_HVJjzFaX-yPnH3WvDFpjg9JH/view" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <p><b>Interested in attending? Great, submit your application today.</b>
                    <br/>
                    <br/>
                    <a className = "btn" href="https://docs.google.com/forms/d/1TURwfrDC1Knyhqt5Ykeee6bjxJM_eKDlWKWOec1fY2s/viewform?ts=5f0158ca&edit_requested=true">Apply Here</a></p>

            </div>
        )
    }
}

export default Home;