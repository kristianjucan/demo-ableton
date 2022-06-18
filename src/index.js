import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Jobs from './Components/Jobs';
import Apprenticeships from './Components/Apprenticeships';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
      <Routes>
            <Route path='/' element={<App />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/apprenticeships' element={<Apprenticeships />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
