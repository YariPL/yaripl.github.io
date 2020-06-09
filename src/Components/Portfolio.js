import React, { useState } from 'react';

export const Portfolio = () => {
	const [portfolioState, setPortfolioState] = useState({
		projectsData: [{
			title: 'project1',
			color: 'red'
		},
		{
			title: 'project2',
			color: 'violet'
		}]
	})
	return (
		<div id='portfolio'>
			<div className='gallery'>
				{portfolioState.projectsData.map((singleProject, index) => 
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

