import React, { useContext, useState } from 'react';
import ReviewStoreContext from '../utils/ReviewContext';

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

  const [selected, setSelected] = useState({
    size: '',
    width: '',
    comfort: '',
    quality: '',
    length: '',
    fit: '',
  });

  function handleDisplay(e) {
    setSelected((prevSelected) => ({ ...prevSelected, [e.target.name]: e.target.id }));
  }

  return (
    <div>
      {metaData.characteristics
        && (
        <div className="characteristics-form">
          <span>Characteristics</span>
          {Object.keys(metaData.characteristics).includes('Size') && (
          <form className="Size" onChange={handleDisplay}>
            <div>Size</div>
            <div>{ selected.size ? size[selected.size] : 'none selected'}</div>
            {Object.keys(size).map((option, index) => (
              <label htmlFor={option} key={option} className="Size">
                <input type="radio" className="Size" name="size" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Width')
          && (
          <form className="Width" onChange={handleDisplay}>
            <div>Width</div>
            <div>{ selected.width ? width[selected.width] : 'none selected'}</div>
            {Object.keys(width).map((option, index) => (
              <label htmlFor={option} key={option} className="Width">
                <input type="radio" className="Width" name="width" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Comfort')
          && (
          <form className="Comfort" onChange={handleDisplay}>
            <div>Comfort</div>
            <div>{ selected.comfort ? comfort[selected.comfort] : 'none selected'}</div>
            {Object.keys(comfort).map((option, index) => (
              <label htmlFor={option} key={option} className="Comfort">
                <input type="radio" className="Comfort" name="comfort" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Quality')
          && (
          <form className="Quality" onChange={handleDisplay}>
            <div>Quality</div>
            <div>{ selected.quality ? quality[selected.quality] : 'none selected'}</div>
            {Object.keys(quality).map((option, index) => (
              <label htmlFor={option} key={option} className="Quality">
                <input type="radio" className="Quality" name="quality" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Length')
          && (
          <form className="Length" onChange={handleDisplay}>
            <div>Length</div>
            <div>{ selected.length ? length[selected.length] : 'none selected'}</div>
            {Object.keys(length).map((option, index) => (
              <label htmlFor={option} key={option} className="Length">
                <input type="radio" className="Length" name="length" id={option} value={index + 1} onChange={handleChange} />
              </label>
            ))}
          </form>
          )}
          {Object.keys(metaData.characteristics).includes('Fit')
          && (
          <form className="Fit" onChange={handleDisplay}>
            <div>Fit</div>
            <div>{ selected.fit ? fit[selected.fit] : 'none selected'}</div>
            {Object.keys(fit).map((option, index) => (
              <label htmlFor={option} key={option} className="Fit">
                <input type="radio" className="Fit" name="fit" id={option} value={index + 1} onChange={handleChange} />
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
