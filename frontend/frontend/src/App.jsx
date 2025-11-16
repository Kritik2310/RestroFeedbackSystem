import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import Sidebar from './components/Sidebar';
import AddRestaurant from './pages/TopRated';
import About from './pages/About';
import Navbar from './components/Navbar';
import './styles.css';

function App(){
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path='/add-restaurant' element={<AddRestaurant />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;