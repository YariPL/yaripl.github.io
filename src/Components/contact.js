import React from 'react';
import axios from 'axios';


export class Contact extends React.Component {
	state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
    	// stop page reloading
	  e.preventDefault()

	  this.setState({
	      buttonText: 'Sending ...'
	  })

	  let data = {
	      name: this.state.name,
	      email: this.state.email,
	      message: this.state.message
	  }
	  
	  axios.post('API_URI', data)
	  .then( res => {
	      this.setState({ sent: true }, this.resetForm())
	  })
	  .catch( () => {
	    console.log('Message not sent')
	  })
	}
	// reset form after submiting and sending data
	resetForm = () => {
	    this.setState({
	        name: '',
	        message: '',
	        email: '',
	        buttonText: 'Message Sent'
	    })
	}

	render() {
		return(
			<div id='contact'>
				
				<div className='formTitle'>
					Contact
				</div>
				<form className="form" onSubmit={ (e) => this.formSubmit(e)}>
				  <textarea onChange={e => this.setState({ message: e.target.value})} name="message" type="text" placeholder="message" value={this.state.message} required/>

				  <input onChange={e => this.setState({ name: e.target.value})} name="name" type="text" placeholder="name" value={this.state.name}/>

				  <input onChange={(e) => this.setState({ email: e.target.value})} name="email" type="email" placeholder="email" required value={this.state.email} />

				  <div className="button">
				      <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
				  </div>
				</form>


			</div>
		)
	}
}

export default Contact;
