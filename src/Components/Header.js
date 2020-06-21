import React, { useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = () => {

    const toggleBurgerMenu = () => {
        document.querySelector('.burger').classList.toggle('change');
        let menu = document.querySelector('.menu');

        // toggle menu on mobile
        menu.classList.contains('showMenu') ?
            menu.classList.replace('showMenu', 'hideMenu') :
                menu.classList.replace('hideMenu', 'showMenu')

        }
    /* useEffect(()=>{
        setTimeout(() => {
            document.querySelector('.menu').style.opacity = 1;
        }, 1500);
    }, []) */
    
    return (
      <div id="header">
        <div className="burger" onClick={toggleBurgerMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className="menu hideMenu">
          <div className="menuItem">
            <AnchorLink href="#homePage">Home</AnchorLink>
          </div>
          <div className="menuItem" onClick={toggleBurgerMenu}>
            <AnchorLink href="#about">About</AnchorLink>
          </div>
          <div className="menuItem">
            <AnchorLink href="#portfolio">Portfolio</AnchorLink>
          </div>
          <div className="menuItem">
            <AnchorLink href="#contact">Contact</AnchorLink>
          </div>
        </div>
      </div>
    );
}
