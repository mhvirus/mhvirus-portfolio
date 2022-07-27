import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';


const slaceVariants = {
  whileInView : {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header= () => {
  return (
    <div className="app__header app__flex">
      <motion.div
      // for animation that motion library provides
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.75 }}

      className="app__header-info"
      >
        <div className="app__header-bage">
          {/*  header text */}
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft:20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">
                Mhirus
              </h1>
            </div>
          </div>

          {/* header sub-headings */}
          <div className="tage-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      {/* header image */}
      <motion.div
      // for animation that motion library provides
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.75, delayChildren: 0.75 }}

      className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg" />

        {/* animated image background */}
        <motion.img
          // for animation that motion library provides
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="circle"
        />  
      </motion.div>

      {/* header logo images */}
      <motion.div
        variants={ slaceVariants }
        whileInView = { slaceVariants.whileInView }
        className="app__header-circle"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
};

export default Header;