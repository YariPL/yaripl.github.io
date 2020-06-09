import React, { useState } from 'react';

export const Contact = () => {

  const [contactState,setContactState] = useState({
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  })

    const formSubmit = (e) => {
    	// stop page reloading
	  e.preventDefault()

      setContactState({
        ...contactState,
        buttonText: 'Sending...'
      })

	  
	}
	// reset form after submiting and sending data
	const resetForm = () => {
    setContactState({
      ...contactState,
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
	}

		return (
      <div id="contact">
        <div className="formTitle">Contact</div>
        <form
          action="/contact"
          className="form"
          onSubmit={e => e.preventDefault()}
        >
          <textarea
            onChange={e => setContactState({...contactState, message: e.target.value })}
            name="message"
            type="text"
            placeholder="message"
            value={contactState.message}
            required
          />

          <input
            onChange={e => setContactState({...contactState, name: e.target.value })}
            name="name"
            type="text"
            placeholder="name"
            value={contactState.name}
          />

          <input
            onChange={e => setContactState({...contactState, email: e.target.value })}
            name="email"
            type="email"
            placeholder="email"
            required
            value={contactState.email}
          />

          <div className="button">
            <button type="submit" className="button button-primary">
              {contactState.buttonText}
            </button>
          </div>
        </form>
      </div>
    );
}

export default Contact;
