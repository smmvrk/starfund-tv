/* eslint-disable react/no-multi-comp */
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AccountPage from './pages/account-page';
import EventDetailsPage from './pages/event-details-page';
import EventPage from './pages/event-page';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import WelcomePage from './pages/welcome-page';
import {store} from './store/store';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const isWelcomePageShown = localStorage.getItem('isWelcomePageShown');

    if (isWelcomePageShown) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('isWelcomePageShown', true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={loading ? <WelcomePage /> : <AccountPage />}
          />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route
            path="/event-details/:id/:name"
            element={<EventDetailsPage />}
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
