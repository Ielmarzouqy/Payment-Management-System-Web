import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './features/sheared/pages/LandingPage';
import Dashboard from './features/admin/pages/Dashboard';
import HomePage from './features/sheared/pages/HomePage';
// import ReceiptPage from './features/payment/pages/ReceiptPage';
// import ListPaymentPage from './features/payment/pages/ListPaymentPage';

import AddClientPage from './features/client/pages/AddClientPage';
import ListClientPage from './features/client/pages/ListClientPage';
// import PaymentPage from './features/payment/pages/PaymentPage';
// import Details from './features/payment/pages/Details';

import AllApartments from './features/appartement/pages/AllApartments';
import AddApart from './features/appartement/pages/AddApart';
import PaymentRoute from './features/payment/routes/PaymentRoute';
import Side from './features/admin/components/Side';
import EditApartmentPage from './features/appartement/pages/EditApartmentPage';
import EditClientPage from './features/client/pages/EditClientPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/side" element={<Side />} />


          <Route path="/addAPart" element={<AddApart />} />
          <Route path="/apartment/editapartment/:id" element={<EditApartmentPage />} />

          <Route path="/allAparts" element={<AllApartments />} />

          <Route path="/payment/*" element={<PaymentRoute />} />
          {/* <Route path="/details" element={<Details />} /> */}

          {/* <Route path="/allpayments" element={<ListPaymentPage />} /> */}

          {/* <Route path="/receipt" element={<ReceiptPage />} /> */}

          <Route path="/addClient" element={<AddClientPage />} />
          <Route path="/client/editClient/:id" element={<EditClientPage />} />

          <Route path="/allClients" element={<ListClientPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
