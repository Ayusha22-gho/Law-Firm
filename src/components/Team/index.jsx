import React from 'react'
import "./team.css"

export default function index({clientsData}) {
  return (
    <div className='team-container'>
      <div className="team-heading">
        <p>Our Team</p>
      </div>
      <div className="team-details">
        {
          clientsData.map((data)=>(
            <div className= "team-tab" key = {data.id} id = {`client-${data.id}`}>
          <img src = {data.avatar} alt = "person"/>
          <div className="team-info">
            <p className='team-name'>{data.first_name} {data.last_name}</p>
            <p className='team-cases'>{data.cases} cases</p>
          </div>
        </div>
          ))
        }
        
      </div>
    </div>
  )
}
