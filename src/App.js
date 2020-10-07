import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar/>
          <MainContent/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;