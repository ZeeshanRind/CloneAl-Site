import React from 'react'
import {Features} from '../../components';
import './whatgpt.css';

const WhatGPT = () => {
  return (
    <div className='gpt__whatgpt section__margin' id='wgpt'>
      <div className='gpt__whatgpt-feature'>
        <Features title='What is GPT' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum doloremque odit facilis magni quidem placeat cumque perferendis hic, tenetur debitis nisi necessitatibus facere cum labore obcaecati pariatur laboriosam maxime ipsum?'/>
      </div>

      <div className='gpt__whatgpt-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt__whatgpt-container'>
        <Features title='Chatbots' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum doloremque odit facilis magni quidem placeat cumque perferendis hic'/>

        <Features title='Knowledgebase' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum doloremque odit facilis magni quidem placeat cumque perferendis hic'/>

        <Features title='Education' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum doloremque odit facilis magni quidem placeat cumque perferendis hic'/>
      </div>
    </div>
  )
}

export default WhatGPT
