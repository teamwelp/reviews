import React from 'react';
import PropTypes from 'prop-types';
import UserStats from './user_stats';
import style from './styles/side_bar_style.css';

const Sidebar = (props) => {
  return (
    <div className={style.sideBar}>
      <div className="passport">
        <img className={style.avatar} src={props.user.image} alt="hello"></img>
        <div className={style.userInfo}>
          <a className={style.username} href="/">{props.user.username}</a>
          <div className={style.userLocation}>San Leandro, CA</div>
          <UserStats stats={props.user} />
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
