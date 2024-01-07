import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt__possibility section__padding' id='possibility'>
      <div className="gpt__possibility-image">
        <img src={possibility} alt="" />
      </div>

      <div className="gpt__possibility-container">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda sit odio qui. Provident Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nulla?corrupti magnam, accusamus quo eaque animi?</p>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
      </div>
    </div>
  )
}

export default Possibility
