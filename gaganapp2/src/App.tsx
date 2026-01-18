import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './Component/MainLayout';
import Home from './pages/Home';
function App()
{
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Add more routes here as needed */}
      </Route>
    </Routes>
  );
}

export default App;
