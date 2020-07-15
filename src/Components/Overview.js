import React from 'react'

class Overview extends React.Component {
    render () {
        return (
            <div className = "container">
                <h2>Virtual Summer Retreat </h2>

                

                    <p>During the Virtual Summer Retreat, your child will have the opportunity to connect with a diverse group of peers
                    and engage in discussions and project-based learning that will deepen their understanding of how experiences shape
                    people’s perceptions of the world. These discussions and projects are designed to address the major upper elementary Common Core English Language Arts standards. Our goal is for students to be challenged intellectually while working 
                    together to solve problems, thereby providing authentic opportunities to exchange ideas and collaborate, in an effort
                    to dispel societal prejudices. </p>

                    {/* <p><a className = "btn" href="https://docs.google.com/forms/d/1TURwfrDC1Knyhqt5Ykeee6bjxJM_eKDlWKWOec1fY2s/viewform?ts=5f0158ca&edit_requested=true">Apply Here</a></p> */}

                    <b>Participants can expect to develop skills such as:</b>
                        {/* <ul> */}
                        <li>Making inferences</li>
                        <li>Determining and analyzing themes</li>
                        <li>Evaluating sources</li>
                        <li>Analyzing point of view/perspective</li>
                        <li>Supporting ideas with examples and evidence</li>
                        <li>Posing questions</li>
                        <li>Elaborating on the remarks of others</li>
                        <li>Summarizing the key ideas expressed and drawing conclusions in light of information and knowledge gained from discussion</li>
                        <li>Generating and comparing possible solutions to problems</li>
                        <li>Developing and using models to organize information</li>
                        <br/>
                    <b>Dates and Times:</b>
                       
                        <li>Session A: July 27-31 (2pm-4pm)</li>
                        <li>Session B: August 3-7 (10am-12pm)</li>
                        <li>Session C: August 3-7 (1pm-3pm)</li>
                        <li>Session D: August 10-14 (10am-12pm)</li>
                        <li>Session E: August 10-14 (1pm-3pm)</li>

                    <p><b>Technology requirements:</b>
                    <br/>
                    An internet-enabled device that your child will use to connect to Zoom sessions
                    for two hours per day throughout the week of the retreat.</p>
                    <p><b>Cost:</b><br/>  
                    Free to participants</p>                  

                    <p><a className = "btn" href="https://docs.google.com/forms/d/1TURwfrDC1Knyhqt5Ykeee6bjxJM_eKDlWKWOec1fY2s/viewform?ts=5f0158ca&edit_requested=true">Apply Here</a></p>
 
            </div>
        )
    }
}

export default Overview;