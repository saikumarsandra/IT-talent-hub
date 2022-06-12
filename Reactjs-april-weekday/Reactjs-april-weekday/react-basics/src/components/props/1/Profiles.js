import React from 'react';
import Profile from './Profile';

const Profiles = () => {
  return (
      <div className='container'>
          <div className='row'>
              
            <Profile name="John Doe" job="Sr. Developer" email="john@gmail.com"/>
           
            <Profile name="Rachel Smith" job="HR Manager" email="rachel@gmail.com" />

            <Profile name="steve doe" job="Product Manager" email="steve@gmail.com" />
          </div>

      </div>
  )
}

export default Profiles