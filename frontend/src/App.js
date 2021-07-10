import './App.css';
import { useState } from 'react'

import CraneCanvas from './components/CraneCanvas'
import AboutView from './components/AboutView'
import CraneSubmission from './components/CraneSubmission'
import NavBar from './components/NavBar'
import ContactFooter from './components/ContactFooter'
import { Parallax } from 'react-parallax';  

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
        bgImageStyle={{height:'auto',width:'100%'}}
      >
      <NavBar setCurrentPage={setCurrentPage}/>
      {currentView}
      <ContactFooter/>
    </Parallax>
    </div>
  );
}

export default App;
