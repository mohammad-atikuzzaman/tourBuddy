import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GuideDetailsPage from './pages/GuideDetailsPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GuideDetailsPage />} />
        <Route path="payment" element={<PaymentPage />} />
      </Route>
    </Routes>
  );
}

export default App;