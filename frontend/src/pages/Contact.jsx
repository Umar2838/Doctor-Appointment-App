import React from 'react'

const Contact = () => {
  return (
   <section>
    <div className='px-4 mx-auto max-w-screen-md' >
<h2 className='heading text-center' >Conatct Us</h2>
<p className='mb-8 lg:mb font-light text' >Got a technical issue? want to send feedback about a beta feature? let us know</p>
<form action='#' className='space-y-8' >
  <div>
    <label htmlFor='email' className='form__label' >
Your Email
    </label>
    <input type='email' id='email' placeholder='exampl@gmail.com' className='form__input mt-1' />
  </div>
  <div>
    <label htmlFor='subject' className='form__label' >
Subject
    </label>
    <input type='text' id='subject' placeholder='Let us know how we can help you' className='form__input mt-1' />
  </div>
  <div className='sm:col-span02' >
    <label htmlFor='message' className='form__label' >
Your Message
    </label>
    <textarea rows="6" type='text' id='message' placeholder='Leave a comment' className='form__input mt-1' />
  </div>
  <button type='submit' className='btn rounded sm:w-full' >Submit</button>
</form>
    </div>
   </section>
  )
}

export default Contact
