import { useState } from 'react';
import './App.css';
// import Content from './components/Content';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Notpage from './Pages/Notpage';
// import Styled from './Styled';


function App() {
// let Nmae = "홍길동";
  
  return (
  //   <div className="App">
  <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/*" element={<Notpage/>}/>
      </Routes>
      </>
  //   <div className ='content'>
  //     <Content arrayNum="0"/>
  //     <Content arrayNum="1"/>
  //     <Content arrayNum="2"/>
  //     <Content arrayNum="3"/>
  //   </div>
  //   <Styled />
  // </div>
  
  );
}
export default App;

{/* <div>
<h3 className={Name} style={{color: "orange, backgroundColor: "skyblue"}}>Hello React {Name}</h3>
</div> */}