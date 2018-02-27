import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/side_bar_style.css';

const Sidebar = (props) => {
  return (
    <div className={style.sideBar}>
      <div className="passport">
        <img className={style.avatar} src={props.user.image} alt="hello"></img>
        <div className={style.userInfo}>
          <a className={style.username} href="/">{props.user.username}</a>
          <div className={style.userLocation}>San Leandro, CA</div>
          <div className="user-stats">
            <div className={style.statContainer}>
              <i className={`material-icons ${style.sideBarIcons}`}>people</i>
              <span className={style.figures}>{`friends ${props.user.friends}`}</span>
            </div>
            <div className={style.statContainer}>
              <i className={`material-icons ${style.sideBarIcons}`}>star</i>
              <span className={style.figures}>{`reviews ${props.user.reviews}`}</span>
            </div>
            <div className={style.statContainer}>
              <i className={`material-icons ${style.sideBarIcons}`}>camera_alt</i>
              <span className={style.figures}>{`photos ${props.user.photos}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object,
};

Sidebar.defaultProps = {
  user: {},
};

export default Sidebar;
