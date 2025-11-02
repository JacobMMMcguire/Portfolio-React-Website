import React from 'react'   
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className = 'services'>

        <div className="services-title">

            <h1 id="services">My Services</h1>

            <img src={theme_pattern} alt=""></img>

        </div>

        <div className="services-container">

            {Services_Data.map((service,index) => {

                return <div key={index} className="services-format">

                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>

                    {/* Old feature where services had "Read more" and arrow design

                        <div className="services_readmore">

                            <p>Read More</p>
                            <img src={arrow_icon} alt=""></img>

                        </div>

                    */}
                    

                </div>

            })}

        </div>

    </div>
  )
}

export default Services