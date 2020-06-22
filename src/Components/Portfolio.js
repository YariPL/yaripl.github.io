import React, { useState } from 'react';
/* 
import image1 from './../assets/project1.png';
import image2 from "./../assets/project2.png";
import image3 from "./../assets/project3.png";
import react from './../assets/stack/react.png';
import sass from './../assets/stack/sass.png';
import mongodb from './../assets/stack/mongodb.png';
import nodejs from './../assets/stack/nodejs.png'; */
import project2Video from './../assets/videos/mov_bbb.mp4';
/* import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
 */export const Portfolio = () => {
	const [portfolioState, setPortfolioState] = useState({
    projectsData: [
      {
        title: "404 T-REX 3d clone",
        techStack: ["three.js", "webpack", "react", "sass"],
        videoUrl: project2Video,
        descr: `Clone of the famous chrome's 404 game made in 3D with the help of Three.js framework`,
      },
      {
        title: "Task manager",
        techStack: ["react", "mongodb", "nodejs", "express", "rest", "sass"],
        videoUrl: project2Video,
        descr: `Task manager project build to control multiple projects with
					tasks and subtasks.` /*  All changes done by user will be reflected
					immediately. */,
      },
      {
        title: "Pathfinding visualizer",
        techStack: ["react", "sass"],
        videoUrl: project2Video,
        descr: `App to visualize how does pathfinding algorithm works`,
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
                      <div className="checkCode">Code</div>
                      <div className="checkLive">Live</div>
                    </div>
                  </div>
                  <div className="bodyRightDescrStack">
                    <div className="stackTitle">Technologies:</div>
                    <div className="stackImages">
                      {singleProject.techStack.map((e, index) => (
                        /* <img src={e} alt="stack" key={index} />*/
                        <span>{e}</span>
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

