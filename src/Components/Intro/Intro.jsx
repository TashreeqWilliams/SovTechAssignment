import React from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import database from '../../img/database.png';
import glassesimoji from '../../img/glassesimoji.png';
import Csharplogo from '../../img/Csharplogo.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";


const Intro = () => {
    return(
        <div className="intro">
       <div className="i-left">
      <div className="i-name">
       <span>Hi, I Am</span>
       <span>TASHREEQ WILLIAMS</span>
       <span> In 2015 I worked in retail as a sales consultant and would often work on the Point-Of-Sale system. I was always curious as to what was behind these Point-Of-Sale systems which then led me to go into Software Development. 
        I completed a Higher certificate and Diploma in Information and Communication in Technology.<br/><br/>
        I have grown passionate about software development and I am eager to learn more.
        I believe I am capable of doing any task if given the opportunity. It would be an 
        honor to gain experience in any Information Technology environment. My time at Red Panda
        Software has given me relevant experience for this position.</span>
      </div>



<div className="i-icons">
<a href='https://github.com/TashreeqWilliams'><img src={Github} alt=""/></a>

<a href='https://www.linkedin.com/in/tashreeq-williams-97528a1b5/'><img src={LinkedIn} alt=""/></a>

<a href='https://www.instagram.com/tashr3eq_w/?hl=en'><img src={Instagram} alt=""/></a>

</div>

       </div>
       <div className="i-right">
      <img src={Vector1} alt=""/>
      <img src={Vector2} alt=""/>
      <img src={boy} alt=""/>
      <img src={glassesimoji} alt=""/>

      <div style={{top:'-4%', left:'68%'}}>
        <FloatingDiv image={Csharplogo} txt1='C# Developer' txt2=''/>
      </div>
      <div style={{top:'18rem', left:'0rem'}}>
        <FloatingDiv image={database} txt1='Databases'/>
      </div>



      </div>

        </div>
    )
}

export default Intro;