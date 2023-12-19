import {  Route, Routes } from 'react-router-dom';
import PaymentLayout from '../layout/PaymentLayout';
import ListPaymentPage from '../pages/ListPaymentPage';
import Details from '../pages/Details';
import PaymentPage from '../pages/PaymentPage';
import ReceiptPage from '../pages/ReceiptPage';
import EditPaymentPage from '../pages/EditPaymentPage';

const  PaymentRoute = () => (
    <Routes>
      <Route path="/" element={<PaymentLayout />}>
        <Route index element={<ListPaymentPage />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/edit/:id" element={<EditPaymentPage />} />

        <Route path="/addPayment" element={<PaymentPage />} />
        <Route path="/receipt/:id" element={<ReceiptPage />} />
      </Route>
    </Routes>
);

export default PaymentRoute;
