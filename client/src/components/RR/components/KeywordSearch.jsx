import React from 'react';
import PropTypes from 'prop-types';
import KeywordSearchStyled from './styles/StyledKeywordSearch';

function KeywordSearch({ setSearchTerm }) {
  function handleChange(e) {
    if (e.target.value.length > 3) {
      setSearchTerm(e.target.value);
    } else {
      setSearchTerm('');
    }
  }

  return (
    <KeywordSearchStyled>
      <label htmlFor="search">
        <input type="text" id="search" placeholder="Search..." onChange={handleChange} />
      </label>
    </KeywordSearchStyled>
  );
}

export default KeywordSearch;

KeywordSearch.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
