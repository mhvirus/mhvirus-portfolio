import React, { useState }from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { images } from '../../constants';

import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loding, setLoading] = useState(false);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setFormSubmitted(true);
      setLoading(false);
    }).catch(() => {});
  }

  return (
    <>
      <h2 className='head-text'>
        Take a Coffe & Chat With Me.
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:harisqasim78@gmail" className='p-text'>
            harisqasim78@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +92 (308) 2127022" className='p-text'>
          +92 (308) 2127022
          </a>
        </div>
      </div>

      {!formSubmitted ?

      <div className="app__footer-from app__flex">
        <div className="app__flex">
          <input type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} name="name" id="name" />
        </div>

        <div className="app__flex">
          <input type="text" placeholder='Your Email' value={email} onChange={handleChangeInput} name="email" id="email" />
        </div>

        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            onChange={handleChangeInput}
            name="message"
            id="message"
          />
        </div>

        <button type='button' className='p-text' onClick={handleSubmit}>
          {loding ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
          <h2 className='head-text'> Thank You For Contacting Me </h2>
        </div>
      }
    </>
  )
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "app__footer",
  "app__whitebg"
  );