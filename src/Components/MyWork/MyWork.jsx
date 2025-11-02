import React from 'react'
import'./MyWork.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {

  return (
    <div className='mywork'>

        <div className="mywork-title">

            <h1 id="latest-work">My Latest Work</h1>
            <img src={theme_pattern} alt=''></img>

        </div>

        <div className="mywork-container">

            {mywork_data.map((work, index) => {

                return <a className="mywork-format" href={work.link}> 
                
                    <img key={index} src={work.w_img} alt=""></img>

                </a>

            })}

        </div>
        

    </div>
  )
}

export default MyWork