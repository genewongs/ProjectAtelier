import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ReviewStoreContext from '../utils/ReviewContext';

function CharacteristicsForm({ handleChange }) {
  const { metaData } = useContext(ReviewStoreContext);
  const Size = {
    'size-e': 'A size too small',
    'size-d': '½ a size too small',
    'size-c': 'Perfect',
    'size-b': '½ a size too big',
    'size-a': 'A size too wide',
  };
  const Width = {
    'width-e': 'Too narrow',
    'width-d': 'Slightly narrow',
    'width-c': 'Perfect',
    'width-b': 'Slightly wide',
    'width-a': 'Too wide',
  };
  const Comfort = {
    'comf-e': 'Uncomfortable',
    'comf-d': 'Slightly uncomfortable',
    'comf-c': 'Ok',
    'comf-b': 'Comfortable',
    'comf-a': 'Perfect',
  };
  const Quality = {
    'qual-e': 'Poor',
    'qual-d': 'Below Average',
    'qual-c': 'What I expected',
    'qual-b': 'Pretty Great',
    'qual-a': 'Perfect',
  };
  const Length = {
    'len-e': 'Runs Short',
    'len-d': 'Runs slightly short',
    'len-c': 'Perfect',
    'len-b': 'Runs slightly long',
    'len-a': 'Runs Long',
  };
  const Fit = {
    'fit-e': 'Runs tight',
    'fit-d': 'Runs slightly tight',
    'fit-c': 'Perfect',
    'fit-b': 'Runs slightly long',
    'fit-a': 'Runs Long',
  };

  const [selected, setSelected] = useState({
    Size: '',
    Width: '',
    Comfort: '',
    Quality: '',
    Length: '',
    Fit: '',
  });

  const characterisitics = {
    Size,
    Width,
    Comfort,
    Quality,
    Length,
    Fit,
  };

  function handleDisplay(e) {
    setSelected((prevSelected) => ({ ...prevSelected, [e.target.name]: e.target.id }));
  }

  return (
    <div className="characteristics-form">
      <span>Characteristics</span>
      {metaData.characteristics && (
        Object.keys(metaData.characteristics).map((characteristic) => (
          <form className={characteristic} key={characteristic} onChange={handleDisplay}>
            <div className="characteristic-container">
              {characteristic}
              <div className="selected">{ selected[characteristic] ? characterisitics[characteristic][selected[characteristic]] : 'none selected'}</div>
              <div className="input-container">
                {Object.keys(characterisitics[characteristic]).map((option, index) => (
                  <label htmlFor={option} key={option} className={characteristic}>
                    <input type="radio" className={characteristic} name={characteristic} id={option} value={index + 1} onChange={handleChange} />
                  </label>
                ))}
              </div>
            </div>
          </form>
        )))}
    </div>
  );
}

export default CharacteristicsForm;

CharacteristicsForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
