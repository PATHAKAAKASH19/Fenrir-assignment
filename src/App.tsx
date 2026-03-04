import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import DashboardPage from "../src/pages/DashboardPage";
import Dashboard from "./components/Dashboard";
import Scans from "./components/Scans";
import ThemeProvider from "./components/layout/ThemeProvide";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashboardPage />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scans" element={<Scans />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
