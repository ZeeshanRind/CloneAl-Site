import React from 'react';
import {Article} from '../../components';
import './blog.css';
import {blog01,blog02,blog03,blog04,blog05} from './imports'

const Blog = () => {
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">A lot is happening. We are blogging about it.</h1>
      </div>

      <div className="gpt__blog-container">
        
         <div className="gpt__blog-content">
           <Article imgUrl={blog01} date='August 13, 2023' title='GPT and OpenAI is the future. Let explore how it is ?'/>
         </div>

         <div className="gpt__blog-content-1">
           <Article imgUrl={blog02} date='August 13, 2023' title='GPT and OpenAI is the future. Let explore how it is ?'/>
           <Article imgUrl={blog03} date='August 13, 2023' title='GPT and OpenAI is the future. Let explore how it is ?'/>
           <Article imgUrl={blog04} date='August 13, 2023' title='GPT and OpenAI is the future. Let explore how it is ?'/>
           <Article imgUrl={blog05} date='August 13, 2023' title='GPT and OpenAI is the future. Let explore how it is ?'/>
         </div>
      </div>

    </div>
  )
}

export default Blog
