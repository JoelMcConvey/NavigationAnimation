import React, { useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {

  useEffect(() => {
    let mouseCursor = document.querySelector(".cursor");
    let navLogo = document.querySelector(".logo");
    let navLinks = document.querySelectorAll(".nav-links li");

    window.addEventListener('mousemove', cursor);

    function cursor(e) {
      mouseCursor.style.top = e.pageY + 'px';
      mouseCursor.style.left = e.pageX + 'px';
    }

    navLogo.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-grow');
      mouseCursor.style.border = 'transparent';
      navLogo.classList.add('hovered-link');
    });
    navLogo.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-grow');
      mouseCursor.style.border = '2px solid black';
      navLogo.classList.remove('hovered-link');
    });

    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        mouseCursor.style.border = 'transparent';
        link.classList.add('hovered-link');
      });
      link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        mouseCursor.style.border = '2px solid black';
        link.classList.remove('hovered-link');
      });
    });
  });

  return (
    <div className="App">
      <div className="cursor"></div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="https://github.com/JoelMcConvey" target="_blank" rel="noreferrer">
              <motion.h1 className="logo" whileTap={{ scale: 0.8 }}>Ureshii</motion.h1>
            </a>
          </li>
          <li>
            <a href="https://github.com/JoelMcConvey" target="_blank" rel="noreferrer">
              <motion.h2 className="nav-item" whileTap={{ scale: 0.9 }}>
                Home
              </motion.h2>
            </a>
          </li>
          <li>
            <a href="https://github.com/JoelMcConvey" target="_blank" rel="noreferrer">
              <motion.h2 className="nav-item" whileTap={{ scale: 0.9 }}>
                About
              </motion.h2>
            </a>
          </li>
          <li>
            <a href="https://github.com/JoelMcConvey" target="_blank" rel="noreferrer">
              <motion.h2 className="nav-item" whileTap={{ scale: 0.9 }}>
                Menu
              </motion.h2>
            </a>
          </li>
          <li>
            <a href="https://github.com/JoelMcConvey" target="_blank" rel="noreferrer">
              <motion.h2 className="nav-item" whileTap={{ scale: 0.9 }}>
                Contact
              </motion.h2>
            </a>
          </li>
        </ul>
      </nav>
      <h1 className="screen-warn"><a href="https://www.amazon.co.uk/s?k=monitor&crid=BCABK19Z2G0B&sprefix=monitor%2Caps%2C78&ref=nb_sb_noss_1" target="_blank" rel="noreferrer">Larger screen</a>&nbsp;required</h1>
    </div>
  );
}

export default App;
