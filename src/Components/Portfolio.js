import React from 'react';

export class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//defaultSortValue: 'all',
			currentSortData:[],
			projectsData: [{
				title:'project1',
				category:['all','js','react'],
				image:'./1.jpg'
			},
			{
				title:'project2',
				category:['all','js','node'],
				image:'./2.jpg'
			},
			{
				title:'project3',
				category:['all','react','node'],
				image:'./3.jpg'
			}
			,{
				title:'project4',
				category:['all','js'],
				image:'./4.jpg'
			}
			,{
				title:'project5',
				category:['all','react'],
				image:'./5.jpg'
			}
			,{
				title:'project6',
				category:['all','node'],
				image:'./6.jpg'
			}
			,{
				title:'project7',
				category:['all','js'],
				image:'./7.jpg'
			}
			,{
				title:'project8',
				category:['all','js','react'],
				image:'./8.jpg'
			}
			,{
				title:'project9',
				category:['all','react'],
				image:'./9.jpg'
			}
			,{
				title:'project10',
				category:['all','js','react'],
				image:'./10.jpg'
			}]
		}
		this.sortProjects = this.sortProjects.bind(this)
	}

	sortProjects(e) {
		
		let singleProject = null;
		let singleProjectArray = [];
		//console.log(this.state);
		//console.log(`hello ${e}`);
		for(let i=0;i<this.state.projectsData.length;i++){
			for(let y=0;y<this.state.projectsData[i].category.length;y++){
				//console.log(this.state.projectsData[i])
				if(this.state.projectsData[i].category[y] === e) {

					//console.log('yes');
					singleProject = `<div class='singleProject'>
					<div class='title'>${this.state.projectsData[i].title}</div>
					<img src='${this.state.projectsData[i].image}'></div>`
					// fullfill current data with good values
					
					singleProjectArray.push(singleProject);
					
				}
			}
		}
		document.querySelector('.gallery').innerHTML = singleProjectArray.join('');
	}
	componentDidMount() {
		// run initial gallery sort
    	this.sortProjects('node');
    }
	render() {
		return (
			<div id='portfolio'>
				<div className='selector'>
					<div className='allP selectorButtons' onClick={() => this.sortProjects('all')}>
					ALL
					</div>
					<div className='javascriptP selectorButtons' onClick={() => this.sortProjects('js')}>
					Javascript
					</div>
					<div className='reactjsP selectorButtons' onClick={() => this.sortProjects('react')}>
					React.js
					</div>
					<div className='nodejsP selectorButtons' onClick={() => this.sortProjects('node')}>
					Node.js
					</div>
				</div>
				<div className='gallery'>
				</div>
			</div>
		)
	}
}

export default Portfolio;
