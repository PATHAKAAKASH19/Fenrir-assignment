import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import DashboardPage from "../src/pages/DashboardPage";
import ScanPage from "../src/pages/ScanPage";
import ThemeProvider from "./components/layout/ThemeProvide";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/scan/:id" element={<ScanPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
