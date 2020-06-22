
import React, { useState } from 'react';
import axios from 'axios';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Contact = () => {



  const [contactState,setContactState] = useState({
    name: '',
    message: '',
    email: '',
    buttonText: 'Send'
  })

    const formSubmit = (e) => {
    	// stop page reloading
	  e.preventDefault()

      let data = { 
        name:contactState.name,
        message:contactState.message,
        email:contactState.email
      }

      setContactState({
        ...contactState,
        buttonText: 'Sending...'
      })

      axios.post('http://localhost:8000/',data)
        .then(res => {
			console.log('success')
        })
        .catch(() => {
          console.log('Message not sent')
        })

	  resetForm();
	}
	// reset form after submiting and sending data
	const resetForm = () => {
    setContactState({
      name: "",
      message: "",
      email: "",
      buttonText: "Send",
    });
	}

	return (
    <div id="contact">
      <div className="formTitle">{/* Contact */}</div>
      <div id="contactContainer">
        <div className="formContainer">
          <form
            action="/contact"
            className="form"
            onSubmit={(e) => e.preventDefault()}
          >
            <textarea
              onChange={(e) =>
                setContactState({ ...contactState, message: e.target.value })
              }
              name="message"
              type="text"
              placeholder="message"
              value={contactState.message}
              required
            />

            <input
              onChange={(e) =>
                setContactState({ ...contactState, name: e.target.value })
              }
              name="name"
              type="text"
              placeholder="name"
              value={contactState.name}
            />

            <input
              onChange={(e) =>
                setContactState({ ...contactState, email: e.target.value })
              }
              name="email"
              type="email"
              placeholder="email"
              required
              value={contactState.email}
            />

            <div className="button">
              <button
                type="submit"
                className="button button-primary"
                onClick={formSubmit}
              >
                {contactState.buttonText}
              </button>
              
            </div>
          </form>
        </div>
        <div className="socialMediaContainer">
          <div className="socialBody">
            <div id="socialHello">Hey, wanna contact me?</div>
            <div id="socialMail">Feel free to send me an email</div>
            <div id="socialAppsPart">
              <div id="socialAppsHello">
                <div id="socialAppsText">Or contact me via</div>
                <div id="socialAppsApps">
                  <a
                    href="https://www.linkedin.com/in/yaroslavkhudchenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://github.com/yaroslavkhudchenko"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>

              <div id="cvGrab">
                <p>
                  And don't forget to get a copy of my
                  <span
                    id="downlCVButton"
                    onClick={() => {
                      let link = document.createElement("a");
                      link.href = "YaroslavKhudchenkoCV.pdf";
                      link.download = "YaroslavKhudchenkoCV.pdf";
                      link.dispatchEvent(new MouseEvent("click"));
                    }}
                  >
                    CV
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

