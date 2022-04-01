import React from 'react';

function CharacteristicsForm() {
  const fit = {
    'fit-e': 'Runs tight',
    'fit-d': 'Runs slightly tight',
    'fit-c': 'Perfect',
    'fit-b': 'Runs slightly long',
    'fit-a': 'Runs Long',
  };

  return (
    <div className="form-container">
      <b>Characteristics</b>
      <form className="size-container">
        <div>Size</div>
        <label htmlFor="size-a" className="size">
          <input type="radio" className="size" name="A size too wide" id="size-a" value="5" />
        </label>
        <label htmlFor="size-b" className="size">
          <input type="radio" className="size" name="½ a size too big" id="size-b" value="4" />
        </label>
        <label htmlFor="size-c" className="size">
          <input type="radio" className="size" name="Perfect" id="size-c" value="3" />
        </label>
        <label htmlFor="size-d" className="size">
          <input type="radio" className="size" name="½ a size too small" id="size-d" value="2" />
        </label>
        <label htmlFor="size-e" className="size">
          <input type="radio" className="size" name="A size too small" id="size-e" value="1" />
        </label>
      </form>
      <form className="width-container">
        <div>Width</div>
        <label htmlFor="width-a" className="width">
          <input type="radio" className="width" name="Too wide" id="width-a" value="5" />
        </label>
        <label htmlFor="width-b" className="width">
          <input type="radio" className="width" name="Slightly wide" id="width-b" value="4" />
        </label>
        <label htmlFor="width-c" className="width">
          <input type="radio" className="width" name="Perfect" id="width-c" value="3" />
        </label>
        <label htmlFor="width-d" className="width">
          <input type="radio" className="" name="Slightly narrow" id="width-d" value="2" />
        </label>
        <label htmlFor="width-e" className="width">
          <input type="radio" className="width" name="Too narrow" id="width-e" value="1" />
        </label>
      </form>
      <form className="comfort-container">
        <div>Comfort</div>
        <label htmlFor="comfort-a" className="comfort">
          <input type="radio" className="comfort" name="Perfect" id="comfort-a" value="5" />
        </label>
        <label htmlFor="comfort-b" className="comfort">
          <input type="radio" className="comfort" name="Comfortable" id="comfort-b" value="4" />
        </label>
        <label htmlFor="comfort-c" className="comfort">
          <input type="radio" className="comfort" name="Ok" id="comfort-c" value="3" />
        </label>
        <label htmlFor="comfort-d" className="comfort">
          <input type="radio" className="comfort" name="Slightly uncomfortable" id="comfort-d" value="2" />
        </label>
        <label htmlFor="comfort-e" className="comfort">
          <input type="radio" className="comfort" name="Uncomfortable" id="comfort-e" value="1" />
        </label>
      </form>
      <form className="quality-container">
        <div>Quality</div>
        <label htmlFor="quality-a" className="quality">
          <input type="radio" className="quality" name="Perfect" id="quality-a" value="5" />
        </label>
        <label htmlFor="quality-b" className="quality">
          <input type="radio" className="quality" name="Pretty Great" id="quality-b" value="4" />
        </label>
        <label htmlFor="quality-c" className="quality">
          <input type="radio" className="quality" name="What I expected" id="quality-c" value="3" />
        </label>
        <label htmlFor="quality-d" className="quality">
          <input type="radio" className="quality" name="Below Average" id="quality-d" value="2" />
        </label>
        <label htmlFor="quality-e" className="quality">
          <input type="radio" className="quality" name="Poor" id="quality-e" value="1" />
        </label>
      </form>
      <form className="length-container">
        <div>Length</div>
        <label htmlFor="length-a" className="length">
          <input type="radio" className="length" name="Runs Long" id="length-a" value="5" />
        </label>
        <label htmlFor="length-b" className="length">
          <input type="radio" className="length" name="Runs slightly long" id="length-b" value="4" />
        </label>
        <label htmlFor="length-c" className="length">
          <input type="radio" className="length" name="Perfect" id="length-c" value="3" />
        </label>
        <label htmlFor="length-d" className="length">
          <input type="radio" className="length" name="Runs slightly short" id="length-d" value="2" />
        </label>
        <label htmlFor="length-e" className="length">
          <input type="radio" className="length" name="Runs Short" id="length-e" value="1" />
        </label>
      </form>
      <form className="fit-container">
        <div>Fit</div>
        {Object.entries(fit).map((option, index) => (
          <label htmlFor={option[0]} className="fit">
            <input type="radio" className="fit" name={option[1]} id={option[0]} value={index} />
          </label>
        ))}
        {/* <label htmlFor="fit-a" className="fit">
          <input type="radio" className="fit" name="Runs Long" id="fit-a" value="5" />
        </label>
        <label htmlFor="fit-b" className="fit">
          <input type="radio" className="fit" name="Runs slightly long" id="fit-b" value="4" />
        </label>
        <label htmlFor="fit-c" className="fit">
          <input type="radio" className="fit" name="Perfect" id="fit-c" value="3" />
        </label>
        <label htmlFor="fit-d" className="fit">
          <input type="radio" className="fit" name="Runs slightly tight" id="fit-d" value="2" />
        </label>
        <label htmlFor="fit-e" className="fit">
          <input type="radio" className="fit" name="Runs tight" id="fit-e" value="1" />
        </label> */}
      </form>
    </div>
  );
}

export default CharacteristicsForm;
