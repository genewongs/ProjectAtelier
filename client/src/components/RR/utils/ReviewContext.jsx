import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReviewStoreContext = createContext();

export function ReviewStore({ children }) {
  const [reviews, setReviewData] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [percentAverageStars, setPercentAverageStars] = useState({
    average: 0,
    percent: 0,
  });
  const [reviewCount, setReviewCount] = useState(0);
  const [recPercent, setRecPercent] = useState(0);
  const [ratingsPercents, setRatingsPercents] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  const { productId } = useParams();
  const id = productId || 65641;

  function getPercents() {
    let totalEntries = 0;
    let totalRating = 0;
    let totalRecs = 0;

    Object.entries(metaData.ratings).forEach((rating) => {
      totalRating += (Number(rating[0]) * Number(rating[1]));
      totalEntries += Number(rating[1]);
    });

    Object.entries(metaData.ratings)
      .forEach((rating) => {
        const percent = Math.round((Number(rating[1]) / totalEntries) * 100);
        setRatingsPercents((prev) => (
          { ...prev, [Number(rating[0])]: `${percent}%` }));
      });

    Object.values(metaData.recommended)
      .forEach((rec) => { totalRecs += Number(rec); });

    if (metaData.recommended.true) {
      setRecPercent(`${Math.round((Number(metaData.recommended.true) / totalRecs) * 100)}%`);
    } else {
      setRecPercent('0%');
    }

    if (totalEntries) {
      setPercentAverageStars({
        average: Math.round((totalRating / totalEntries) * 10) / 10,
        percent: (Math.round((totalRating / totalEntries) * 4) / 4) * 20,
      });
    }
  }

  useEffect(() => {
    if (metaData.length !== 0) {
      getPercents();
    }
  }, [metaData]);

  useEffect(() => {
    axios.get('api/length', { params: { path: `reviews?count=9999&product_id=${id}` } })
      .then((response) => setReviewCount(response.data));
  }, []);

  const store = useMemo(() => ({
    reviews,
    setReviewData,
    metaData,
    setMetaData,
    percentAverageStars,
    recPercent,
    ratingsPercents,
    reviewCount,
    id,
  }), [reviews, metaData]);

  return (
    <ReviewStoreContext.Provider value={store}>
      {children}
    </ReviewStoreContext.Provider>
  );
}

export default ReviewStoreContext;
