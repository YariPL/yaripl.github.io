import React from 'react';

export class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//defaultSortValue: 'all',
			currentSortData:[],
			currentCategory:'all',
			projectsData: [{
				title:'project1',
				category:['all','js','react'],
				color:'red'
			},
			{
				title:'project2',
				category:['all','js','node'],
				color:'violet'
			},
			{
				title:'project3',
				category:['all','react','node'],
				color:'green'
			}
			,{
				title:'project4',
				category:['all','js'],
				color:'yellow'
			}
			,{
				title:'project5',
				category:['all','react'],
				color:'blue'
			}
			,{
				title:'project6',
				category:['all','node'],
				color:'cyan'
			}]
		}
		this.sortProjects = this.sortProjects.bind(this)
	}

	sortProjects(e) {
		this.setState({
			currentCategory: e
		});
    }
	componentDidMount() {
		// run initial gallery sort
    	//this.sortProjects('node');
    }
	render() {
		return (
			<div id='portfolio'>
				<div className='gallery'>
					{this.state.projectsData.map((singleProject, index) => 
							<div key={index} className="singleProject">
								
								<div className='bodyS' style={{background:singleProject.color}} alt="projectName">
									<div className="title">{singleProject.title}</div>
								</div>

							</div>
					)}
				</div>
			</div>
		)
	}
}

export default Portfolio;
