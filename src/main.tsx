import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx';
import Cart from './pages/Cart/Cart.tsx';
import Error404 from './pages/Error404/Error404.tsx';
import Home from './pages/Home/Home.tsx';
import Success from './pages/Success/Success.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Error404 />} />
  </Route>
    </Routes>
  </BrowserRouter>,
)
