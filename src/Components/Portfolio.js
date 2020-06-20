import React, { useState } from 'react';

import image1 from './../assets/project1.png';
import image2 from "./../assets/project2.png";
import image3 from "./../assets/project3.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
export const Portfolio = () => {
	const [portfolioState, setPortfolioState] = useState({
    projectsData: [
      {
        title: "404 TREX 3d clone",
        image: image1,
      },
      {
        title: "Task manager",
        image: image2,
        techStack: ["react", "scss", "mongodb", "nodejs", "express"],
        videoUrl: "https://www.youtube.com/embed/noneMROp_E8"
      },
      {
        title: "Pathfinding visualizer",
        image: image3,
      },
    ],
  });
	const [activeProject, setActiveProject] = useState([]);
	const [showProjectDescr, setShowProjectDescr] = useState(false);
	
	return (
		<div id='portfolio'>
			<div className='gallery'>
				{portfolioState.projectsData.map((singleProject, index) => 
					<div key={index} className="singleProject">
						<div className='bodyS' alt="projectName">
							<div className="title">
								<div className='titletitle'>
									{singleProject.title}
								</div>
								<ArrowForwardIosIcon 
									style={{transform:'rotate(90deg)'}}
									onClick={()=>{
										setActiveProject(singleProject)
										setShowProjectDescr(true);
									}}
								/>
							</div>
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

