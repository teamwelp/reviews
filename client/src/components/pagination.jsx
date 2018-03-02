import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/pagination_style.css';

const Pagination = (props) => {
  const pages = Math.ceil(props.reviewCount / 20);
  const pageDivs = Array(pages).fill(null).map((element, i) => (<span onClick={e => props.clickPage(i + 1)} className={style.page}>{i + 1}</span>));

  return (
    <div className={style.container}>
      <div className={style.text}>{`Page ${props.currentPage} of ${pages}`}</div>
      <div className={style.pageContainer}>
        <span className={style.previousPage}>
          <span className={style.icons}>{'<'}</span>
          <span onClick={e => props.clickPage(props.currentPage - 1)}>Previous</span>
        </span>
        {pageDivs}
        <span className={style.nextPage}>
          <span className={style.icons}>{'>'}</span>
          <span onClick={e => props.clickPage(props.currentPage + 1)}>Next</span>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
