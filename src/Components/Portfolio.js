import React, { useState } from 'react';

import taskVideo from "./../assets/videos/task-man-por.mp4";
import pathVideo from "./../assets/videos/path-por.mp4";

export const Portfolio = () => {
	const [portfolioState, setPortfolioState] = useState({
    projectsData: [
      /* {
        title: "404 T-REX 3d clone",
        techStack: ["three.js", "webpack", "react", "sass"],
        videoUrl: taskVideo,
        descr: `Clone of the famous chrome's 404 game made in 3D with the help of Three.js framework`,
        linkCode: "https://github.com/YariPL/404-trex-clone",
        linkUrl: "https://github.com/YariPL/404-trex-clone",
      }, */
      {
        title: "Task manager",
        techStack: ["react", "mongodb", "nodejs", "express", "rest", "sass"],
        videoUrl: taskVideo,
        descr: `Task manager project build to control multiple projects with
					tasks and subtasks.` /*  All changes done by user will be reflected
          immediately. */,
        linkCode: "https://github.com/YariPL/pathfinder-algorithms-visualizer",
        linkUrl: "https://tasksorginizer.herokuapp.com/",
      },
      {
        title: "Pathfinding visualizer",
        techStack: ["react", "sass"],
        videoUrl: pathVideo,
        descr: `App to visualize how does dijkstra pathfinding algorithm works`,
        linkCode: "https://github.com/YariPL/task-manager",
        linkUrl: "https://pathfindervisualizer.herokuapp.com/",
      },
    ],
  });
	const [activeProject, setActiveProject] = useState([]);
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
                {/* <div className="projectPreview">
                  <img src={singleProject.image} alt="project preview" />
                </div> */}
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

