import React from 'react'
import './ContactUs.css'
import contactusimage from '../asset/37.svg'

export default function ContactUs() {
    return (
        <div className='contactus-wrapper'>
            <div className='form-wrapper'>
                <h1>Contact Us</h1>
                <div className='forms'>
                    <input placeholder='Enter name' type='text' />
                    <input placeholder='Enter email' type="email" />
                    <textarea placeholder='Enter message' cols={50} rows={20} />
                    <a className='submit-btn' href="mailto:`{email}`?subject={subject}&body={body}">Submit</a>
                </div>
            </div>
            <div className='form-img-wrapper'>
                <img src={contactusimage} />
            </div>
        </div>
    )
}
