import { faArrowRightArrowLeft, faCheck, faPhoneVolume, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../style/fStyle.css"

const Facility = () => {
  return (
    <div className='f-container'>
      <div className="f-row">
          <div className="f-col">
                <FontAwesomeIcon icon={faCheck} />
                <span>Good Quality</span>
          </div>
          <div className="f-col">
                <FontAwesomeIcon icon={faTruckFast} />
                <span>Free Delievery</span>
          </div>
          <div className="f-col">
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                <span>14-Day Gaurntee</span>
          </div>
          <div className="f-col">
                <FontAwesomeIcon icon={faPhoneVolume} />
                <span>24/7 available</span>
          </div>
      </div>
    </div>
  )
}

export default Facility
