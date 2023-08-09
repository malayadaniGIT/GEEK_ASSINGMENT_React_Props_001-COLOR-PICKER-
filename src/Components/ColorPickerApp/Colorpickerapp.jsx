import React from 'react'
import "./colorpickerapp.css"

function Colorpickerapp({pcolor,h2color}) {
  return (
    <div className='colorpicker'>
    <div className='box' style={{backgroundColor:h2color}}  ></div>
    <h2 style={{marginLeft:"10px"}}>{h2color}</h2>
    <p style={{pcolor:h2color,marginLeft:"10px"}}>{pcolor}</p>
    </div>
  )
}

export default Colorpickerapp
