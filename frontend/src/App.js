import './App.css';
import { useState } from 'react'

import React from 'react';
import CraneCanvas from './components/CraneCanvas'
import AboutView from './components/AboutView'
import CraneSubmission from './components/CraneSubmission'
import NavBar from './components/NavBar'
import ContactFooter from './components/ContactFooter'
import { Parallax } from 'react-parallax';  

/* from https://stackoverflow.com/questions/62039217/add-buy-me-a-coffee-widget-to-react-application*/
class BuyMeACoffee extends React.Component {
	constructor(props) {
		super(props);
		let script = document.createElement('script');
		script.setAttribute('data-name', 'BMC-Widget');
		script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
		script.setAttribute('data-id', 'unfoldcranes');
		script.setAttribute('data-description', 'Thank you for your support!');
		script.setAttribute('data-message', 'This web is free to use. Do you want to help supporting it?');
		script.setAttribute('data-color', 'rgb(230,202,45)');
		script.setAttribute('data-position', 'right');
		script.setAttribute('data-x_margin', '18');
		script.setAttribute('data-y-margin', '18');
		script.async = true;
		//Call window on load to show the image
		script.onload = function() {
			var evt = document.createEvent('Event');
			evt.initEvent('DOMContentLoaded', false, false);
			window.dispatchEvent(evt);
		};
		this.script = script;
	}

	componentDidMount() {
		document.head.appendChild(this.script);
	}

	componentWillUnmount() {
		document.head.removeChild(this.script);
		document.body.removeChild(document.getElementById('bmc-wbtn'));
	}

	render() {
		return null;
	}
}

const App = () => {
  const [currentPage, setCurrentPage] = useState("CraneCanvas")

  // Sets current viewing component
  let currentView;
  if(currentPage === "CraneCanvas"){
    currentView = <CraneCanvas setCurrentPage={setCurrentPage}/>
  }
  else if (currentPage === "CraneSubmission"){
    currentView = <CraneSubmission setCurrentPage={setCurrentPage}/>
  }
  else if (currentPage === "AboutView"){
    currentView = <AboutView setCurrentPage={setCurrentPage}/>
  }
  else{
    throw Error
  }

  const imgPath = "wallpaper.png"
  return (
      <div className="App">
      <Parallax 
        bgImage={imgPath} 
        strength={1000}
        bgImageStyle={{objectFit: 'cover'}}
      >
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      {currentView}
      <ContactFooter/>
      <BuyMeACoffee/>
    </Parallax>
    </div>
  );
}

export default App;
