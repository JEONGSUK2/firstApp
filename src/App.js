import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';

function App() {
// let Nmae = "홍길동";
 
  
  return (
    <div className="App">
      <Nav />
      
    <div className ='content'>
      <Content arrayNum="0"/>
      <Content arrayNum="1"/>
      <Content arrayNum="2"/>
      <Content arrayNum ="3"/>
    </div>
  </div>
    
  );
}
export default App;

{/* <div>
<h3 className={Name} style={{color: "orange, backgroundColor: "skyblue"}}>Hello React {Name}</h3>
</div> */}