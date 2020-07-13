import React, { useState } from 'react';

import taskVideo from "./../assets/videos/task-man-por.mp4";
import pathVideo from "./../assets/videos/path-por.mp4";
import runnerv1 from "./../assets/videos/runnerv1.mp4";

export const Portfolio = () => {
	const [portfolioState, setPortfolioState] = useState({
    projectsData: [
      {
        title: "T-REX ENDLESS RUNNER",
        techStack: ["three.js", "webpack"],
        videoUrl: runnerv1,
        descr: `3D clone of google chrome browser t-rex game made in 3D with the help of Three.js framework`,
        linkCode: "https://github.com/YariPL/404-trex-clone",
        linkUrl: "https://dino3d.herokuapp.com/",
      },
      {
        title: "Task manager",
        techStack: ["react", "mongodb", "nodejs", "express", "rest", "sass"],
        videoUrl: taskVideo,
        descr: `Task manager is the app which helps to manage projects and tasks`,
        linkCode: "https://github.com/YariPL/task-manager",
        linkUrl: "https://tasksorginizer.herokuapp.com/",
      },
      {
        title: "Pathfinding visualizer",
        techStack: ["react", "sass"],
        videoUrl: pathVideo,
        descr: `Visualization of how the pathfinding algorithm works`,
        linkCode: "https://github.com/YariPL/pathfinder-algorithms-visualizer",
        linkUrl: "https://pathfindingvisualizeralg.herokuapp.com/",
      },
    ],
  });
	const [showProjectDescr, setShowProjectDescr] = useState(false);

	
	return (
    <div id="portfolio">
      <div className="gallery">
        <div
          className={showProjectDescr ? "openProjects projects" : "projects"}
        >
          {portfolioState.projectsData.map((singleProject, index) => (
            <div key={index} className="singleProject">
              <div className='mobileTitle'>
                {singleProject.title}
              </div>
              <div className="bodyLeft" alt="projectName">
                <div className="bodyLeftVideo">
                  <video controls>
                    <source src={singleProject.videoUrl} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="bodyRight">
                <div className="bodyRightDescr">
                  <div className="bodyRightDescrDescr">
                    <div className="title">
                      <div className="titletitle">{singleProject.title}</div>
                    </div>
                    <div className="bodyRightDescrDescrText">
                      {singleProject.descr}
                    </div>
                    <div className="bodyRightDescrCheck">
                      <a 
                        href={singleProject.linkCode} 
                        target='_blank'
                        rel="noopener noreferrer">
                        <div className="checkCode">Code</div>
                      </a>
                      <a 
                        href={singleProject.linkUrl} 
                        target='_blank'
                        rel="noopener noreferrer">
                        <div className="checkLive">Live</div>
                      </a>
                    </div>
                  </div>
                  <div className="bodyRightDescrStack">
                    <div className="stackTitle">Tech:</div>
                    <div className="stackImages">
                      {singleProject.techStack.map((e, index) => (
                        /* <img src={e} alt="stack" key={index} />*/
                        <span key={index}>{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

