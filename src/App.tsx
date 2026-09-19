import './index.css'
import LandingPage from './components/Landing';
import ClubDashboard from "./components/ClubDashboard";
import { BrowserRouter, Routes, Route} from 'react-router';
import { UserProvider } from './hooks/useUser';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={
            <UserProvider>
              <ClubDashboard />
            </UserProvider>
          } />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
