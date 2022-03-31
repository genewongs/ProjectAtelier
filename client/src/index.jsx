import React from 'react';
import ReactDOM from 'react-dom';

// import Overview from './components/Overview/Overview.jsx';
// import RI from './components/RI/RI.jsx';
import QA from './components/QA/QA.jsx';
// import RR from './components/RR/RR.jsx';

function App() {
  return (
    <div className="app-container">
      {/* <Overview />
      <RI /> */}
      <QA />
      {/* <RR /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
