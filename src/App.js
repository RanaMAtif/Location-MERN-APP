import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/places/new" element={<NewPlace />} />
          <Route exact path="/:userID/places" element={<UserPlaces />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
