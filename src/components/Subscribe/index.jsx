import React from 'react'
import './subscribe.css'

export default function index() {
  return (
    <div className='subscribe-container'>
        <div className="sub-heading">
            <p>Subscribe Our Newsletter</p>
        </div>
        <div className="sub-form">
            <input type = "text" placeholder='Name:' className='name-input'/>
            <input type = "email" placeholder='Enter your email' className='email-input' />
            <button className='send-button' >SEND</button>
        </div>
    </div>
  )
}
