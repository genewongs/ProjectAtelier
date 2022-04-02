import React, { useContext } from 'react';
import ReviewStoreContext from '../utils/ReviewContext.jsx';

function CharacteristicsForm({ handleChange }) {
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
          <form>
            <div>Size</div>
            {Object.keys(size).map((option, index) => (
              <label htmlFor={option} key={option} className="size">
                <input type="radio" className="size" name="size" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Width')
          && (
          <form>
            <div>Width</div>
            {Object.keys(width).map((option, index) => (
              <label htmlFor={option} key={option} className="width">
                <input type="radio" className="width" name="width" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Comfort')
          && (
          <form>
            <div>Comfort</div>
            {Object.keys(comfort).map((option, index) => (
              <label htmlFor={option} key={option} className="comfort">
                <input type="radio" className="comfort" name="comfort" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Quality')
          && (
          <form>
            <div>Quality</div>
            {Object.keys(quality).map((option, index) => (
              <label htmlFor={option} key={option} className="quality">
                <input type="radio" className="quality" name="quality" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Length')
          && (
          <form>
            <div>Length</div>
            {Object.keys(length).map((option, index) => (
              <label htmlFor={option} key={option} className="length">
                <input type="radio" className="length" name="length" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Fit')
          && (
          <form>
            <div>Fit</div>
            {Object.keys(fit).map((option, index) => (
              <label htmlFor={option} key={option} className="fit">
                <input type="radio" className="fit" name="fit" id={option} value={index + 1} onChange={handleChange} />
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
