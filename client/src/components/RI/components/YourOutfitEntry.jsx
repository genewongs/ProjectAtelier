import React from 'react';
import YourOutfitCard from './YourOutfitCard';

export default function YourOutfitEntry({ singleLocalOutfit }) {
  return (
    <YourOutfitCard
      url={singleLocalOutfit.results[0].photos[0].url || 'https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg'}
      name={singleLocalOutfit.name}
      category={singleLocalOutfit.category}
      price={`$${Math.trunc(singleLocalOutfit.default_price)}`}
    />
  );
}
