import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/sidebar_style.css';

const UserStats = (props) => {
  const stats = [
    {
      label: 'friends',
      iconName: 'people',
    },
    {
      label: 'reviews',
      iconName: 'star',
    },
    {
      label: 'friends',
      iconName: 'camera_alt',
    },
  ];

  const statDivs = stats.map((stat) => {
    return (
      <div className={style.statContainer}>
        <i className={`material-icons ${style.sidebarIcons}`}>{stat.iconName}</i>
        <span className={style.figures}>{`${stat.label} ${props.stats.photos}`}</span>
      </div>
    );
  });

  return (<div>{statDivs}</div>);
};

UserStats.propTypes = {
  stats: PropTypes.object,
};

UserStats.defaultProps = {
  stats: {},
};

export default UserStats;
