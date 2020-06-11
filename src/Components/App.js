import React from 'react';
import './../css/main.scss';
import {About} from './About';
import {Portfolio} from './Portfolio';
import { Contact } from './Contact';
import {Header} from './Header';
import {Home} from './Home';

export const App = () =>
	<div className="main">
		<Header />
		<Home />
		<About />
		<Portfolio />
		<Contact />
	</div>
	 
  