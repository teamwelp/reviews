import React from 'react';
import Dropdown from './dropdown';
import style from './styles/display_settings_style.css';

const DisplaySettings = () => {
  const sortSelection = {
    selection: ['Yelp Sort', 'Newest First', 'Oldest First', 'Highest Rated', 'Lowest Rated'],
    label: 'Sort by',
  };

  const languageSort = {
    selection: ['English'],
    label: 'Language',
  };

  return (
    <div className={style.container}>
      <input className={style.searchBox} type="text" placeholder="Search within the reviews"></input>
      <button className={style.searchButton}>
        <i className={`material-icons ${style.searchIcon}`}>search</i>
      </button>
      <Dropdown selection={sortSelection.selection} label={sortSelection.label} />
      <Dropdown selection={languageSort.selection} label={languageSort.label} />
    </div>

  );
};

export default DisplaySettings;

