import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.scss';

export default function Filter({ filter, change }) {
  return (
    <>
      <p className={css.filter}>Find contacts by name</p>
          <input type="text" name="found" className={css.filterFinder} value={filter} onChange={change} />
    </>
  );
}

Filter.propTypes = {
  change: PropTypes.func.isRequired
};