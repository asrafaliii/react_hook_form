import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Blog from "./pages/Blog";
import Docs from "./pages/Docs";
import Framework from "./pages/Framework";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Team from "./pages/Team";
import Tutorial from "./pages/Tutorial";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route
          path="/tutorial"
          element={
            <RequireAuth>
              <Tutorial />
            </RequireAuth>
          }
        />
        <Route path="/framework" element={<Framework />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
