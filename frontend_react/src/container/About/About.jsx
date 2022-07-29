import { motion } from 'framer-motion';
import React, { useState, useEffect} from 'react';
import { images } from '../../constants'

import './About.scss';

// * data for about section
const about = [
  { title : 'Web Development',
    description: 'I am a web developer with a passion for building web applications.',
    imageURL: images.about01
  },
  { title : 'Frontend Development',
    description: 'I am a web designer with a passion for creating beautiful web applications.',
    imageURL: images.about02
  },
  { title : 'Backend Development',
    description: 'I am a UI/UX designer with a passion for creating beautiful web applications.',
    imageURL: images.about03
  },
  { title : 'MERN Stack',
    description: 'I am a web animation designer with a passion for creating beautiful web applications.',
    imageURL: images.about04
  },
];


const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Dev </span> <br />means <span>Good Business</span>
      </h2>

      <div className="app__profiles">

        {about.map((about, index) => {
          return (
            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
            >
              <img src={about.imageURL} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20}}> {about.title} </h2>
              <h2 className="p-text" style={{ marginTop: 10}}> {about.description} </h2>

             
            </motion.div>
          )
        })}

      </div>
    </>
  )
};

export default About;