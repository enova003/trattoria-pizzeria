import "./App.css";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="top-border">
        <img
          className="logo"
          src="./images/trattoria_logo.png"
          alt="Trattoria Logo"
        />
          <p className="top-contact">251-375-0076<br/>11611 US Highway 31 Spanish Fort , AL 36527</p>
      </div>
      <Sidebar />
    </Router>
  );
}

export default App;
