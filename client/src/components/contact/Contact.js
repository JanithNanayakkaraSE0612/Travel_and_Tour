import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contactPage'>
        <form action="" className='contactForm'>
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Phone Number</label>
            <input type="text" />
            <label htmlFor="">ID Number</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default Contact