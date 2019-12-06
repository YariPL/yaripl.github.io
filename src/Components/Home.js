import React from 'react';
import Particles from 'react-particles-js';

export class Home extends React.Component {
    render() {
        return (

            <div id='homePage'>
                <Particles className='particles'
                    params={{
                        "particles": {
                            "number": {
                                "value": 120,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.06
                            },
                            "move": {
                                "direction": "right",
                                "speed": 0.06
                            },
                            "size": {
                                "value": 1
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 3,
                                    "opacity_min": 0.05
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }} />

                <div className='title'>
                    <div className='name'>
                        Hello, I'm Yaroslav.
					</div>
                    <div className='job'>
                        I'm a front-end developer.
					</div>
                </div>
            </div>
        );
    }
}