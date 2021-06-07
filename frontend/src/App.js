import './App.css';
import { useState } from 'react'

import CraneCanvas from './components/CraneCanvas'
import AboutView from './components/AboutView'
import CraneSubmission from './components/CraneSubmission'
import NavBar from './components/NavBar'

//Testing comment
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

  return (
    <div className="App">
      <NavBar setCurrentPage={setCurrentPage}/>
      {currentView}
    </div>
  );
}

export default App;
