import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";



const Services = () => {
    return (
      <div className="services">

        
        <div className="awesome">
            <span>WHY I'D LIKE TO WORK FOR</span>
            <span>SOVTECH</span>
            <spane>· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·· ·<br /></spane>
           
            <button className="button s-button">DOWNLOAD RESUME</button>
          
           <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>
      <div className="cards">
     <div>
        <Card emoji={HeartEmoji} 
        heading = {''}/>
         
         I could be a strong contributor to the SovTech team because I believe my values align perfectly with the Sovtech Spex. I believe that being a
         software engineer is not only writing or understanding code but also being able to work well with other people which will in turn take care of SovTech's business and clients.
         I have a strong desire to learn and I am hoping that SovTech could be the company that compliments my growth.
          <br/>
         
      </div>
       </div>
       </div>

    );
  }

  export default Services;