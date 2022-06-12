

import React from 'react'

const Approve = (props) => {
  return (
    <>
     <div className='col'>
     <div className="card" >
  <div className="card-body m-2">
 
    <h5 className="card-title">Notification</h5>
    <h6 className="card-subtitle mb-2 text-muted">You can review the invite</h6>

    <div>
        {props.children}
    </div>
    
    <button  className="btn btn-sm btn-success m-2">Approve</button>
    <button className="btn btn-sm btn-danger m-2">Reject</button>
   
  </div>
</div>

     </div>
    </>
  )
}

export default Approve