import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';
import LanguageSwitch from './LanguageSwitch';

function header() {
    return (
        <header id='header'>
        <div className='header container'>
          <div className='nav-bar'>
            <div className='brand'>
              <a href='#hero'>
                <h1><span>R</span>oberto <span>R</span>eina</h1>
              </a>
            </div>
            <div className='nav-list'>
              <div className='hamburger'>
                <div className='bar'></div>
              </div>
              <ul>
                <li><Link to='/' data-after='Home'>Home</Link></li>
                <li><Link to='/skills' data-after='Skills'>Skills</Link></li>
                <li><Link to='/projects' data-after='Projects'>Projects</Link></li>
                <li><Link to='/about' data-after='About'>About</Link></li>
                <li><Link to='/contact' data-after='Contact'>Contact</Link></li>
                <li><LanguageSwitch/></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
}

export default header;
