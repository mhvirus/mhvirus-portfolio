import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {[ 'Home', 'About', 'Contact', 'Work', 'Skils', 'testimonials', 'contact' ].map((item, index) => {
                return (
                    <a 
                    href={`#${item}`}
                    key={item + index}
                    onClick={() => setToggle(false)} 
                    className="app__navaigation-dot"
                    style={active === item ? { backgroundColor: '#373BAC' } : { }}
                    />
                       
                )
             })}   
    </div>
  )
}

export default NavigationDots