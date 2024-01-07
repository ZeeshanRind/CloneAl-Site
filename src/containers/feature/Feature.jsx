import React from 'react';
import { Features } from '../../components';
import './feature.css';

const featureData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptatum numquam cumque explicabo sit hic debitis ipsam!'
  },
  {
    title: 'Becomes the tended active',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptatum numquam cumque explicabo sit hic debitis ipsam!'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptatum numquam cumque explicabo sit hic debitis ipsam!'
  },
  {
    title: 'Really boy Law country',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptatum numquam cumque explicabo sit hic debitis ipsam!'
  }
];

const Feature = () => {
  return (
    <div className='gpt__features section__padding' id='features'>
      <div className="gpt__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt__features-container">
        {featureData.map((item, index) => (
          <Features title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Feature;