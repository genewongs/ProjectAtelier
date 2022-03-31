import React from 'react';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ['1', '2', '3'],
    };
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    return axios.get();
  }

  render() {
    return (
      <div>
        {this.state.questions}
      </div>
    );
  }
}

// export default function QA() {
//   return (
//     <div> Hello we`&apos;`re inside Questions and Answers </div>
//   );
// }

// function get(e) {
//   e.preventDefault();
//   axios.get('/api', { params: { path: `products/${id}/styles` } })
//     .then((prod) => setProduct(prod.data));
// }

export default QA;
