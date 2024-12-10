import { Routes, Route } from 'react-router-dom';
import './index.css';
import { LayoutCards } from './components/LayoutCards'; // Verification Component
import { BusinessDetailsForm } from './components/BusinessDetails'; // Form Filling Component

function App() {
  return (
    <Routes>
      {/* Route for the Verification Page */}
      <Route path="/" element={<LayoutCards />} />

      {/* Route for the Form Filling Page */}
      <Route path="/form" element={<BusinessDetailsForm />} />
    </Routes>
  );
}

export default App;
