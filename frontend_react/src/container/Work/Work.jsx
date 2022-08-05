import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';

function Work() {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [fillterWork, setFillterWork] = useState([]);


  useEffect(() => {
    const query = `*[_type == "works"]`;

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFillterWork(data);
      })
  }, [])
  

  const handleWorkFilter = ( item ) =>{
   
  }

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio </span>Section
      </h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            > 
              {item}
            </div>
          )
        })}
      </div>

      <motion.div
        animate={ animateCard }
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
          {fillterWork.map((work, index) => {
            return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                {/* project ScreenShoot */}
                <img src={urlFor(work.imgUrl)}  alt={work.name} />

                {/* project icons */}
                <motion.div
                  whileHover={{opacity: [0, 1]}}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  {/* project website link icon */}
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  {/* Github project link icon */}
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>

                </motion.div>

              </div>

               {/* project infomation */}
              <div className="app__work-content app__flex">

                {/* Name of Project */}
                <h2 className="bold-text"> {work.title} </h2>

                {/* Decription of project */}
                <p className="p-text" style={{ margainTop: 10 }}> {work.description} </p>

                {/* Tage of project */}
                <div className='app__work-tag app__flex'>
                  <p className='p-text bold-text'> {work.tags[0]} </p>
                </div>

              </div>
            </div>
            )
          })}

      </motion.div>

    </>
  )
};

export default AppWrap(Work, 'work');