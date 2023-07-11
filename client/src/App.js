import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import HabitsPage from "./pages/HabitsPage";
import TODOPage from "./pages/TODOPage";
import DashboardPage from "./pages/DashboardPage";
import StatisticsPage from "./pages/StatisticsPage";
import StudyGroupPage from "./pages/StudyGroupsPage";
import RegisterPage from "./pages/RegisterPage";
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import LoginPage from "./pages/LoginPage";

// Referenced Tailwind Elements Example for styling: https://tailwind-elements.com/docs/standard/navigation/sidenav/
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/dashboard"} element={<DashboardPage />} />
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route path={"/todos"} element={<TODOPage />} />
          <Route path={"/habits"} element={<HabitsPage />} />
          <Route path={"/statistics"} element={<StatisticsPage />} />
          <Route path={"/studyGroups"} element={<StudyGroupPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
