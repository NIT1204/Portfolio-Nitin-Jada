import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';  
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';


const MyComponent = () => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Footer/>
    </div>
  );
};

export default MyComponent;