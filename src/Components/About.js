import React from 'react';
import myFace from "./../assets/face_cr.png";
export const About = () => (
         <div id="about">
           <div className="aboutBlock">
             <div className="aboutBlockTop">
               <div className="photo">
                 <img src={myFace} alt="myface:)" />
               </div>
               <div className="text">
                 <p>
                   Hello, my name is Yaroslav. I'm a front-end developer from
                   Wroclaw, Poland.
                 </p>
                 <p>
                   I have 2 years of commercial experience in building web
                   applications as well as mobile and desktop ones.{" "}
                 </p>
               </div>
             </div>
             <div className="stackBlock">
               <div className="iKnow">
                 <div className="iKnowTitle">Technologies I use:</div>
                 <div className="iKnowContent">
                   <span>JS (ES2015+)</span>
                   <span>CSS (RWD, SASS)</span>
                   <span>React.js (Hooks, Context API)</span>
                   <span>Ember.js</span>
                   <span>Three.js</span>
                   <span>GIT</span>
                   <span>PWA</span>
                   <span>Electron.js</span>
                   <span>Webpack</span>
                   <span>NPM</span>
                 </div>
               </div>
               <div className="familierWith">
                 <div className="familierWithTitle">{/* Technologies I familier with: */}</div>
                 <div className="familierWithContent">
                   <span>MongoDB</span>
                   <span>Node.js(basics)</span>
                   <span>Express.js</span>
                   <span>REST API</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       );
      