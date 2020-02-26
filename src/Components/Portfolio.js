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
					{this.state.projectsData.map(singleProject => 
						singleProject.category.map((category,index) => 
							<div key={index} className="singleProject">
								<div className="title">{singleProject.title}</div>
								<img src={singleProject.image} alt="projectName" />
							</div>
						)
					)}
				</div>
			</div>
		)
	}
}

export default Portfolio;
