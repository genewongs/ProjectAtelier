import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyles';

import Overview from './components/Overview/Overview';
import RI from './components/RI/RI';
import QA from './components/QA/QA';
import RR from './components/RR/RR';

function App() {
  return (
      <div className="app-container">
        <GlobalStyle />
        <Overview />
        <RI />
        <QA />
        <RR />
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
