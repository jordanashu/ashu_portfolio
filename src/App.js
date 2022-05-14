import Navbar from "./components/navbar/Navbar";
import './App.css'

import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Card from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {themeContext} from './Context'  
import {useContext} from 'react';  


function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (

    <div className="App"
    style={{background:darkMode? 'black': '',
    color:darkMode? 'white': ''
    
    }}
    
    
    >


      <Navbar/>
      <Intro/>
      <Services/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
