import React from "react";
import './style.css';

function App() {
  return(
    <div id="body">

      <Header/>

      <Card
      className="section"
       img="./crop.jpg" 
     
      description1="Click here to find the best yield"
      />
      <Grid/>
      
      <ContactContainer/>
     


    </div>
 );
}
const Nav=()=>{
  return(
    <div className="top">
    <button className="button1" style={{
     
    
    
    
    }}>start</button>
    </div>
  );
}


const Header=()=>{
  return(
    


<div className="header">
<button className="button1" style={{
 



}}>start</button>
<button className="button2" style={{
 



}}>start</button>
<span className='header-title1'>
          FarmForecast 
  </span>

  <span className='header-title2'>
          welcome to crop yield prediction 
  </span>
  <br/>
  <span className="header-text">
    Cultivate the best yield

  </span>
</div>
  );
}

const Card = (props)=>{
  return(
<div className={props.className}>

  <div className="small-div">

    <img src={props.img} alt=''/>
   
  </div>
  <button className="button1" style={{
 



  }}>prediction</button>
  <button className="button2" style={{
   
  
  
  
  }}>recommendation</button>
  <div className="big-div">
    <span classname="div-title">
         {props.title}
    </span>
    <br/>
    <span>
      {props.description}
    </span>
  </div>
</div>

  );
}
const Grid=()=>{
  return(
    <div className="grid-container">
  <div className="grid-item">
  <p>yeyeyeyeye</p>
  <div className="para">
  <p >jhkdfhkajhfkljshfkljshf</p>
  </div>
  
  </div>
  <div className="grid-item">
  <p>yeyeyeyeye</p>
  <div className="para">
  <p >jhkdfhkajhfkljshfkljshf</p>
  </div>
  
  </div>
  <div className="grid-item">
  <p>yeyeyeyeye</p>
  <div className="para">
  <p >jhkdfhkajhfkljshfkljshf</p>
  </div>
  
  </div>


  <div className="grid-item">
  <p>yeyeyeyeye</p>
  <div className="para">
  <p >jhkdfhkajhfkljshfkljshf</p>
  </div>
  
  </div>
  </div>
  );
}
const ContactContainer=()=>{
  return(
    <div classname="contact_details">
      <h1>Contact Details</h1>
<span>
 
  Email-spit@spit.ac.in

</span>
<br/>
<span>
Phone number-123456789
</span>
    </div>
  );
}

export default App;
