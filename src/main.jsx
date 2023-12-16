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
import Mission from './Pages/Mission';

/**
 * This Application component constructs the router of the application
 * It renders the LandingPage, Pricing, and App components according to the route.
 * 
 * The Application adheres to WCAG's section 2.4.4 (Link Purpose) guideline
 * by allowing link destinations to be programmatically determined.
 */
export function Application() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/mission" element={<Mission/>} />
            <Route path="*" element={<NotFound />} /> 
          </Route>
        </Routes>
    </Router> 
  );
}

const rootContainer = document.getElementById('root');
ReactDOM.createRoot(rootContainer).render(<Application />);