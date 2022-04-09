import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Overview from './components/Overview/Overview';
import RI from './components/RI/RI';
import QA from './components/QA/QA';
import RR from './components/RR/RR';

function RoutedApp () {
  return (
    <Router>
      <Routes>
        <Route path="/:productId" element={<App />}></Route>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </Router>
  );
}

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

ReactDOM.render(<RoutedApp />, document.getElementById('app'));
