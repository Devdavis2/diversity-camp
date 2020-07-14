import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Nav extends React.Component {
    componentDidMount() {
        //  
        //  Add in const M =window.M;
         const M =window.M;
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.sidenav');
          // Change options to an open object
          var instances = M.Sidenav.init(elems, {});
        });
       }


    render () {
        return (
            <div>
                <nav className="black blue-text !important">
                    <div className="nav-wrapper">
                    <a href="#" className="sidenav-trigger" data-target="slide-out"> 
                    <i className="material-icons">menu</i></a>
                    <a className="brand-logo center" href="#" ><img className="menulogo"/></a>
                    {/* Make sure to keep nav-mobile in top nav*/}
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
          
                        <li><a className="homebtn" href="/">Home</a></li>
                        <li><a className="resumebtn" href="/Story">Story</a></li>
                        <li><a className="resumebtn" href="/About">About</a></li>
                        <li><a className="contactbtn" href="/Overview">Virtual Retreat</a></li>
              
                    </ul>
                </div>
            </nav>

<ul id="slide-out" className="sidenav white-text !important blue mobile-menu">
    <li><a className="homebtn" href="/">Home</a></li>
    <li><a className="resumebtn" href="/Story">Story</a></li>
    <li><a className="resumebtn" href="/About">About</a></li>
    <li><a className="contactbtn" href="/Overview">Virtual Retreat</a></li>
</ul>
            </div>
        )
    }
}

export default Nav;