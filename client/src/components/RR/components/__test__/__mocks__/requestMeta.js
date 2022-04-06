const meta = {
  product_id: '65641',
  ratings: {
    3: '1',
    4: '1',
    5: '1',
  },
  recommended: {
    true: '3',
  },
  characteristics: {
    Size: {
      id: 220264,
      value: null,
    },
    Width: {
      id: 220265,
      value: null,
    },
    Comfort: {
      id: 220266,
      value: null,
    },
    Quality: {
      id: 220267,
      value: null,
    },
  },
};

function requestMeta() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => (meta ? resolve(meta) : reject(new Error('metaData unavailable'))));
  });
}

export default requestMeta;
