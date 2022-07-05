import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../style/uStyle.css"

const Updation = () => {
  return (
    <div className='new-container'>
        <div className="new-row">
            <div className="new-col">
               <h2 className="new-title">Newsletter</h2>
                <p className="new-desc">Get timely update from our latest Products.</p>
                <div className="input-container">
                    <input type="text" placeholder='Your E-mail' />
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Updation
