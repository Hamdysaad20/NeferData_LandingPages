// Import React and required modules from react-router
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import page components
import LandingPage from './Pages/LandingPage/LandingPage';
import Pricing from './Pages/Pricing/Pricing';
import App from './Pages/App';
import NotFound from './Pages/NotFound'; // Import the 404 page component

// Import style sheets
import './styles/index.css';
import './styles/fonts.css';
import Mission from './Pages/MissionPage/Mission';
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