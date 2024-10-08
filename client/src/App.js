import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";


function App() {
  return (
    <div className="App">
      <Analytics />
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
