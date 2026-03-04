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
     
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<Dashboard />} />
            <Route path="scans" element={<Scans />} />
          </Route>

          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
