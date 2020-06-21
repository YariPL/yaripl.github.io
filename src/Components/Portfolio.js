import React, { useState } from 'react';

import image1 from './../assets/project1.png';
import image2 from "./../assets/project2.png";
import image3 from "./../assets/project3.png";
import react from './../assets/stack/react.png';
import sass from './../assets/stack/sass.png';
import mongodb from './../assets/stack/mongodb.png';
import nodejs from './../assets/stack/nodejs.png';
import project2Video from './../assets/videos/mov_bbb.mp4';
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
        techStack: [react, sass, mongodb, nodejs /* , "express" */],
        videoUrl: project2Video,
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
    <div id="portfolio">
      <div className="gallery">
        <div className="projects">
          {portfolioState.projectsData.map((singleProject, index) => (
            <div key={index} className="singleProject">
              <div className="bodyS" alt="projectName">
                <div className="title">
                  <div className="titletitle">{singleProject.title}</div>
                  <ArrowForwardIosIcon
                    style={{ transform: "rotate(90deg)" }}
                    onClick={() => {
                      setActiveProject(singleProject);
                      setShowProjectDescr(true);
                    }}
                  />
                </div>
                <div className="projectPreview">
                  <img src={singleProject.image} alt="project preview" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {showProjectDescr && (
          <div className="bodyD">
            <div className="bodyDVideo">
              <video controls>
                <source src={activeProject.videoUrl} type="video/mp4" />
              </video>
            </div>
            <div className="bodyDDescr">
              <div className="bodyDDescrDescr">
                Task manager project build to control multiple projects with
                tasks and subtasks. All changes done by user will be reflected
                immediately.
              </div>
              <div className="bodyDDescrStack">
                {activeProject.techStack.map((e, index) => (
                  <img src={e} alt="stack" key={index} />
                ))}
              </div>
              <div className="bodyDDescrCheck">
                <div className="checkCode">Code</div>
                <div className="checkLive">Live</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

