import React from 'react'
import './in-progress.css'
import LetterI from '../../assets/images/letter-i.png'
import LetterKU from '../../assets/images/letter-ku.png'
import People from '../../assets/images/people.png'

const InProgress = () => {
  return (
    <div className='in-progress'>
        <div className='in-progress-content'>
            <svg className='in-progress-content-circle'>
                <circle r='80%' cx='50%' cy='50%' fill='#FFFFFF'></circle>
            </svg>
            <div className='in-progress-content-letters-container'>
                <img className='in-progress-content-img-letter-ku' src={LetterKU} alt="letter-ku-img" />
                <img className='in-progress-content-img-letter-i' src={LetterI} alt="letter-i-img" />
            </div>
            <img className='in-progress-content-img-people' src={People} alt="letter-i-img" />
        </div>
    </div>
  )
}

export default InProgress