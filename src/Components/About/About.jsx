import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import profile_img_fUll from '../../assets/profile_img_full.jpg'

const About = () => {
  return (
    <div className = 'about'>
        
        <div className="about-title">

            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>

        </div>
        <div className = "about-sections">

            <div className = "about-left">
                
                <img src={profile_img_fUll} alt="" /> 

            </div> 

            <div className="about-right">

                <div className="about-para">

                    <p>My name is Jacob McGuire and I am currently enrolled as a student at Algoma University in the Accelerated Bachelor of Computer Science program.</p>
                    <p>After graduating with a B.Sc. in Psychology from York University I became interested in Computer Science after working as a Machine Operator for a pharmaceutical company. I am now pursuing Software Development as a full time career.</p>

                </div>

                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style = {{width: "50%"}}/></div>
                    <div className="about-skill"><p>Javascript</p> <hr style = {{width: "70%"}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style = {{width: "60%"}}/></div>

               </div>
            </div>
        </div>  
                    <div className="about-achievements">

                    <div className="about-achievement">

                        <h1>10+</h1>
                        <p>YEARS OF EXPERIENCE</p>    
                        
                    </div>
                    <hr />
                    <div className="about-achievement">

                        <h1>90+</h1>
                        <p>YEARS OF EXPERIENCE</p>    
                        
                    </div>
                    <hr />
                    <div className="about-achievement">

                        <h1>4000+</h1>
                        <p>YEARS OF EXPERIENCE</p>    
                        
                    </div>

            </div>
      
        
    </div>
  )
}

export default About