import React from 'react';
import './AboutUs.css'
import { Superscript } from '@mui/icons-material';

function AboutUs() {
    return (
        <div className='aboutus-wrapper'>
            <h1 className='aboutus-title'>Education</h1>
            <div className='timeline-card-container'>
                <div className='timeline-card'>
                    <h3>2013-2014</h3>
                    <h2>Angle's public School</h2>
                    <h3>10</h3>
                    <p><strong>Faridabad,Haryana</strong></p>
                    <p>Grade: <strong>8.4 CPGA</strong></p>
                </div>
                <div className='timeline-card'>
                    <h3>2015-2016</h3>
                    <h2>Angle's public School</h2>
                    <h3>12</h3>
                    <p><strong>Faridabad,Haryana</strong></p>
                    <p>Grade: <strong>87.4%</strong> </p>
                </div>
                <div className='timeline-card'>
                    <h3>2016-2020</h3>
                    <h2>Maharishi Dayanand University</h2>
                    <p><strong>Bachelore of Tech. in CSE</strong></p>
                    <p>Grade: <strong>79.4%</strong></p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;