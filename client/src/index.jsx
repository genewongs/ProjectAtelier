import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';

import Overview from './components/Overview/Overview';
import RI from './components/RI/RI';
import QA from './components/QA/QA';
import RR from './components/RR/RR';
import { ContextStore } from './utils/ContextStore';

function RoutedApp() {
  return (
    <Router>
      <Routes>
        <Route path="/:productId" element={<App />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div className="app-container">
      <ContextStore>
        <GlobalStyle />
        <Overview />
        <RI />
        <QA />
        <RR />
      </ContextStore>
    </div>
  );
}

ReactDOM.render(<RoutedApp />, document.getElementById('app'));
