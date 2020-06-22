import React, { useEffect } from 'react';
export const Header = () => {

    const toggleBurgerMenu = () => {
        document.querySelector('.burger').classList.toggle('change');
        let menu = document.querySelector('.menu');
        // toggle menu on mobile
        menu.classList.contains('showMenu') ?
            menu.classList.replace('showMenu', 'hideMenu') :
                menu.classList.replace('hideMenu', 'showMenu') 

        }
    useEffect(()=>{
        setTimeout(() => {
            document.querySelector('.menu').style.opacity = 1;
        }, 1000);
    }, [])
    
    return (
      <div id="header">
        <div className="burger" onClick={toggleBurgerMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className="menu hideMenu">

          <a href="#homePage">
            <div className="menuItem" onClick={toggleBurgerMenu}>Home</div>
          </a>
          <a href="#about">
            <div className="menuItem" onClick={toggleBurgerMenu}>
              About
            </div>
          </a>
          <a href="#portfolio">
            <div className="menuItem" onClick={toggleBurgerMenu}>Portfolio</div>
          </a>
          <a href="#contact">
            <div className="menuItem" onClick={toggleBurgerMenu}>Contact</div>
          </a>
        </div>
      </div>
    );
}
