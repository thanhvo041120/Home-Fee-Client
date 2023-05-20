import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/common/AuthPage";
import UserHomePage from "./pages/user/UserHomePage";
import PrivateRoute from "./routes/private.route";
import ProtectedRoute from "./routes/protected.route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<ProtectedRoute />}>
            <Route path="/user/home" element={<UserHomePage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<AuthPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
