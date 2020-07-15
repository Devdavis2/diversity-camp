import React from 'react'

class Contact extends React.Component {
    render () {
        return (
            <div className = "container">
                <h1 className= "contact-header">Contact Us</h1>
                <p className= "contact-copy">Have additional questions? Great, shoot us a note at <b><a href="placeholder@gmail.com">placeholder@gmail.com</a></b>
                <br/>
                <a className = "applybtn btn" href="https://docs.google.com/forms/d/1TURwfrDC1Knyhqt5Ykeee6bjxJM_eKDlWKWOec1fY2s/viewform?ts=5f0158ca&edit_requested=true">Apply Here</a></p>
            </div>
        )
    }
}

export default Contact;