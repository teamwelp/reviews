import React from 'react';
import style from './styles/sideBarStyle.css';

const SideBar = (props) => {

  return (
    <div className={style.sideBar}>
      <div className="passport">
        <img className={style.avatar} src={props.user.image} alt="hello"></img>
        <div className="user-info">
          <div className="username">{props.user.username}</div>
          <div className="user-location">redwood</div>
          <div className="user-stats">
            <div className="friend-count">
              <i className="material-icons">people</i>
              <span>friends</span>
              <span>{props.user.friends}</span>
            </div>
            <div className="review-count">
              <i className="material-icons">star</i>
              <span>reviews</span>
              <span>{props.user.reviews}</span>
            </div>
            <div className="photo-count">
              <i className="material-icons">camera_alt</i>
              <span>photos</span>
              <span>{props.user.photos}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;