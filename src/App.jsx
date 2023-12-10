import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './features/sheared/pages/LandingPage';
import Dashboard from './features/admin/pages/Dashboard';
import HomePage from './features/sheared/pages/HomePage';
import ReceiptPage from './features/payment/pages/Receiptpage';
import AddClientPage from './features/client/pages/AddClientPage';
import ListClientPage from './features/client/pages/ListClientPage';
import PaymentPage from './features/payment/pages/PaymentPage';
import AllApartments from './features/appartement/pages/AllApartments';
import AddApart from './features/appartement/pages/AddApart';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/dashboard" element={<Dashboard />} />


          <Route path="/addAPart" element={<AddApart />} />
          <Route path="/allAparts" element={<AllApartments />} />


          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />


          <Route path="/addClient" element={<AddClientPage />} />
          <Route path="/allClients" element={<ListClientPage />} />



        </Routes>
      </Router>
    </>
  );
}

export default App;
