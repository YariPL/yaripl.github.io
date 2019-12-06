import React from 'react';
import './css/main.css';
import Particles from 'react-particles-js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';

class App extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
	  return (
	    <div className="main">
	    	<Header />
	    	<Home />
	    	<About />
	    	<Portfolio />
	    	<Contact />
	    </div>
	  );
  	}
}



class Header extends React.Component  {
	toggleBurgerMenu() {
		document.querySelector('.burger').classList.toggle('change');
		let menu = document.querySelector('.menu');

		// toggle menu on mobile
		menu.classList.contains('showMenu') ? 
			menu.classList.replace('showMenu', 'hideMenu') : 
				menu.classList.replace('hideMenu', 'showMenu')

		
	}
	componentDidMount() {
        setTimeout(() => {
        	document.querySelector('.menu').style.opacity = 1;
        }, 1500)
    }
	render() {
		return (
			<div id="header">
				<div className="burger" onClick={this.toggleBurgerMenu}>
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
				</div>

				<div className='menu hideMenu'>
					<div className='menuItem'><a href='#homePage'>Home</a></div>
					<div className='menuItem'><a href='#about'>About</a></div>
					<div className='menuItem'><a href='#portfolio'>Portfolio</a></div>
					<div className='menuItem'><a href='#'>Contact</a></div>
				</div>
			</div>
	  );
  	}
}

class Home extends React.Component {
	render() {
		return (

			<div id='homePage'>
<Particles className='particles'
    params={{
	    "particles": {
	        "number": {
	            "value": 120,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.06
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.06
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 3,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />

				<div className='title'>
					<div className='name'>
						Hello, I'm Yaroslav.
					</div>
					<div className='job'>
						I'm a front-end developer.
					</div>
				</div>
			</div>
	  );
  	}
}
class About extends React.Component  {
	render() {
		return(
			<div id='about'>
				
				<div className='aboutBlock'>
					<div className='photo'><img src="./user.jpg" /></div>
					<div className='text'>fafwa</div>
				</div>

			</div>
		);
	}

}

export default App;
