import React from 'react'

const User = (props) => {
  return (
    <>
    <div className='col'>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.role}</h6>
   
    <a href="#" className="card-link">Website</a>
    <a href="#" className="card-link">View Profile</a>
  </div>
</div>

    </div>

    </>
  )
}

export default User