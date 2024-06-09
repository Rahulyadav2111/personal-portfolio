import React from 'react';
import './education.css';
import Logo from './logo-college.jpg'
import Internshala from './internshala.png'
import Eduonix from './eduonix.png'

const Education = () => {
  return (
    <div>
        <div className="container">
            <h2>EDUCATION</h2>
            <div className="education">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <p>B.Tech. in Computer Science and Engineering Technology</p>
                    <h3>July 2021 - July 2025</h3>
                </div>
                <div className="c-work">
                    <h4>Relevant Coursework</h4>
                    <ul>
                        <li>Database Management Systems</li>
                        <li>Data Structures and Algorithm</li>
                        <li>Object Oriented Programming</li>
                        <li>Operating System</li>
                        <li>Computer Network</li>
                    </ul>
                </div>
            </div>
            <div className="certificates">
                <h2>ONLINE CERTIFICATION</h2>
                <div className="companies">
                    <div className="img">
                       <a href="https://drive.google.com/file/d/1vVvK5Hym2PkKuqqbuFLwNX_1dht_3XtH/view?usp=drive_link" target='_blank'><img src={Internshala} alt="" /></a> 
                    </div>
                    <div className="img">
                    <a href="https://drive.google.com/file/d/10BVW6HgkXTSm06vV69FgQgYnZiM4X1GM/view?usp=drive_link" target='_blank'><img src={Eduonix} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education