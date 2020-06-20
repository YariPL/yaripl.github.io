import React, { useState } from 'react';

import image1 from './../assets/project1.png';
import image2 from "./../assets/project2.png";
import image3 from "./../assets/project3.png";

export const Portfolio = () => {
	const [portfolioState, setPortfolioState] = useState({
    projectsData: [
      {
        title: "project1",
		color: "red",
		image: image1
      },
      {
        title: "project2",
		color: "violet",
		image: image2
      },
      {
        title: "project3",
		color: "green",
		image: image3
      },
    ],
  });
	return (
		<div id='portfolio'>
			<div className='gallery'>
				{portfolioState.projectsData.map((singleProject, index) => 
					<div key={index} className="singleProject">
						<div className='bodyS' style={{background:singleProject.color}} alt="projectName">
							<div className="title">{singleProject.title}</div>
							<div className='projectPreview'>
								<img src={singleProject.image} alt='project preview' />
							</div>
						</div>
						</div>
				)}
			</div>
		</div>
	)
}

