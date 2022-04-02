import React, { useContext } from 'react';
import ReviewStoreContext from '../utils/ReviewContext.jsx';

function CharacteristicsForm() {
  const { metaData } = useContext(ReviewStoreContext);
  const size = {
    'size-e': 'A size too small',
    'size-d': '½ a size too small',
    'size-c': 'Perfect',
    'size-b': '½ a size too big',
    'size-a': 'A size too wide',
  };
  const width = {
    'width-e': 'Too narrow',
    'width-d': 'Slightly narrow',
    'width-c': 'Perfect',
    'width-b': 'Slightly wide',
    'width-a': 'Too wide',
  };
  const comfort = {
    'comf-e': 'Uncomfortable',
    'comf-d': 'Slightly uncomfortable',
    'comf-c': 'Ok',
    'comf-b': 'Comfortable',
    'comf-a': 'Perfect',
  };
  const quality = {
    'qual-e': 'Poor',
    'qual-d': 'Below Average',
    'qual-c': 'What I expected',
    'qual-b': 'Pretty Great',
    'qual-a': 'Perfect',
  };
  const length = {
    'len-e': 'Runs Short',
    'len-d': 'Runs slightly short',
    'len-c': 'Perfect',
    'len-b': 'Runs slightly long',
    'len-a': 'Runs Long',
  };
  const fit = {
    'fit-e': 'Runs tight',
    'fit-d': 'Runs slightly tight',
    'fit-c': 'Perfect',
    'fit-b': 'Runs slightly long',
    'fit-a': 'Runs Long',
  };

  return (
    <div>
      {metaData.characteristics
        && (
        <div className="form-container">
          {Object.keys(metaData.characteristics).includes('Size') && (
          <form className="size-container">
            <div>Size</div>
            {Object.entries(size).map((option, index) => (
              <label htmlFor={option[0]} key={option[0]} className="size">
                <input type="radio" className="size" name={option[1]} id={option[0]} value={index + 1} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Width')
          && (
          <form className="width-container">
            <div>Width</div>
            {Object.entries(width).map((option, index) => (
              <label htmlFor={option[0]} key={option[0]} className="width">
                <input type="radio" className="width" name={option[1]} id={option[0]} value={index + 1} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Comfort')
          && (
          <form className="comfort-container">
            <div>Comfort</div>
            {Object.entries(comfort).map((option, index) => (
              <label htmlFor={option[0]} key={option[0]} className="comfort">
                <input type="radio" className="comfort" name={option[1]} id={option[0]} value={index + 1} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Quality')
          && (
          <form className="quality-container">
            <div>Quality</div>
            {Object.entries(quality).map((option, index) => (
              <label htmlFor={option[0]} key={option[0]} className="quality">
                <input type="radio" className="quality" name={option[1]} id={option[0]} value={index + 1} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Length')
          && (
          <form className="length-container">
            <div>Length</div>
            {Object.entries(length).map((option, index) => (
              <label htmlFor={option[0]} key={option[0]} className="length">
                <input type="radio" className="length" name={option[1]} id={option[0]} value={index + 1} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Fit')
          && (
          <form className="fit-container">
            <div>Fit</div>
            {Object.entries(fit).map((option, index) => (
              <label htmlFor={option[0]} key={option[0]} className="fit">
                <input type="radio" className="fit" name={option[1]} id={option[0]} value={index} />
              </label>
            ))}
          </form>
          )}
        </div>
        )}
    </div>
  );
}

export default CharacteristicsForm;
