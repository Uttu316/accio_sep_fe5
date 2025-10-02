import PracticePage from "./pages/practice";
import ResumePage from "./pages/resume";
import "./App.css";
import ProductsPage from "./pages/productsPage";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ProductPage from "./pages/ProdcutPage";
import NotFoundPage from "./pages/notFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
