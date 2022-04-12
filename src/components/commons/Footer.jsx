import React from 'react';
import socialData from '../../data/socialData';

function footer() {
    return (
        <footer id="footer">
        <div className="footer footer_container">
          <div className="brand">
            <h1><span>R</span>oberto <span>R</span>eina</h1>
          </div>
          <div className="social-icon">
            {socialData.map((social, index) => {
              return (
                <div className="social-item" key={index}>
                  <a href={social.url}><img src={social.photo} alt={social.name}/></a>
                </div>
              );
            })}
          </div>
          <p>Copyright © 2022 Arenas. All rights reserved</p>
        </div>
      </footer>
    )
}

export default footer;
