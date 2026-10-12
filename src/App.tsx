import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
