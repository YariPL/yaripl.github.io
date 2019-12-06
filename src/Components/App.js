import React from 'react';
import './../css/main.scss';
import {About} from './About';
import {Portfolio} from './Portfolio';
import {Contact} from './Contact';
import {Header} from './Header';
import {Home} from './Home';

export class App extends React.Component  {
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
