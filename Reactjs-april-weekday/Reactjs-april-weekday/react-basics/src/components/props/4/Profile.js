import React from 'react';
import Approve from './Approve';
import User from './User';

export const Profile = () => {
  return (
    <div className='container'>
        <div className='row m-4'>

            <Approve>
                <User name="jane" role="Designer at Google"/>
            </Approve>
            

            <Approve>
                <User name="ivan" role="Product Manager at Figma"/>
            </Approve>
            

            <Approve>
                <User name="steve" role="HR at TeamsInc."/>
            </Approve>
            


        </div>
        
    </div>
  )
}

export default Profile;
