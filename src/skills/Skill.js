import React from 'react';
import './skills.css'
import { SiHtml5, SiUnity } from "react-icons/si";
import { DiJava, DiReact } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb"
import { motion } from "framer-motion";
import ReactStars from 'react-stars';

export default function Skill() {
  return (
    <div className='skill-wraper'>
      <p className='skills-heading'>Skills</p>
      <div className='card-container'>
        <motion.div
          className='card'>
          <span className='icon html'> <SiHtml5 /></span>
          <div className='skills-rate-card'>
            <p className='skill-name'>HTML</p>
            <p className='rating'>Experience</p>
            <ReactStars
              className='stars'
              count={5}
              size={24}
              value={4}
              edit={false}
              color2={'#F9F871'} />
          </div>
        </motion.div>
        <motion.div
          className='card'>
          <span className='icon java'> <DiJava /></span>
          <div className='skills-rate-card'>
            <p className='skill-name'>Java</p>
            <p className='rating'>Experience</p>
            <ReactStars
              className='stars'
              count={5}
              size={24}
              value={3}
              edit={false}
              color2={'#F9F871'} />
          </div>
        </motion.div>
        <div className='card'>
          <span className='icon react'> <DiReact /></span>
          <div className='skills-rate-card'>
            <p className='skill-name'>React</p>
            <p className='rating'>Experience</p>

            <ReactStars
              className='stars'
              count={5}
              size={24}
              value={4}
              edit={false}
              color2={'#F9F871'} />
          </div>
        </div>
        <div className='card'>
          <span className='icon unity'> <SiUnity /></span>
          <div className='skills-rate-card'>
            <p className='skill-name'>Unity</p>
            <p className='rating'>Experience</p>

            <ReactStars
              className='stars'
              count={5}
              size={24}
              value={3}
              edit={false}
              color2={'#F9F871'} />
          </div>
        </div>
        <div className='card'>
          <span className='icon js'> <TbBrandJavascript /></span>
          <div className='skills-rate-card'>
            <p className='skill-name'>JavaScirpt</p>
            <p className='rating'>Experience</p>

            <ReactStars
              className='stars'
              count={5}
              size={24}
              value={3}
              edit={false}
              color2={'#F9F871'} />
          </div>
        </div>
      </div>
    </div>
  )
}
