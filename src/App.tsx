import './index.css'
import LandingPage from './components/Landing';
import ClubDashboard from "./components/ClubDashboard";
import { BrowserRouter, Routes, Route} from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<ClubDashboard />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
