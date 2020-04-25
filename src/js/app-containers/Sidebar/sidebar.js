import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ layoutRoutes }) => {
  return (
    <div className="side-bar">
      <div className="application-logo">
        LOGO
      </div>
      <ul className="side-bar-items">
        {
          layoutRoutes.map(({ path, name, component }, index) => {
            if (component) {
              return (<li key={index} className="side-bar-item"><Link to={path}>{name}</Link></li>);
            }
            return null;
          })
        }
      </ul>
    </div>
  )
}

export default SideBar;
