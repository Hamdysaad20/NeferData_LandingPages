import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './Pages/LandingPage/LandingPage';
import Pricing from './Pages/Pricing/Pricing';
import App from './Pages/App';
import NotFound from './Pages/NotFound'; 
import Mission from './Pages/MissionPage/Mission';

import './styles/index.css';
import './styles/fonts.css';

import ScrollToTop from './ScrolltoTop';


export function Application() {
  return (
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/website" element={<App />}>
            <Route path="index.html" element={<LandingPage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="mission" element={<Mission />} />
          </Route>
          <Route path="/" element={<NotFound />} /> 
        </Routes>
    </Router> 
  );
}

const rootContainer = document.getElementById('root');
ReactDOM.createRoot(rootContainer).render(<Application />);