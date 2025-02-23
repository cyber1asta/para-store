import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import SPFooter from './components/SPFooter';
import SimpleSlider from './components/HeroCarousel';
import HeroSection from './components/HeroSection';
import BsText from './components/BsText';
import Products from './components/Products';
import Ingridients from './components/Ingridients';
import JournalSection from './components/JournalSection';
import FollowONIG from './components/FollowONIG';
import SinglePage from './components/SinglePage';
import JournalPage from './components/JournalPage';
import CartHold from './components/CartHold';
import Cart from './components/Cart';
import CartTotal from './components/CartTotal';
import CartPageFaq from './components/CartPageFaq';
import CartPageFooter from './components/CartPageFooter';
import Under20 from './components/Under20';
import Under10 from './components/Under10';
import ForHer from './components/ForHer';
import ForHim from './components/ForHim';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <MobileNav />
    {children}
    <SPFooter />
  </>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={
            <Layout>
              <SimpleSlider />
              <HeroSection />
              <BsText />
              <Products />
              <Ingridients />
              <JournalSection />
              <FollowONIG />
            </Layout>
          } />

          {/* صفحة المنتج الفردي */}
          <Route path="/:id" element={
            <Layout>
              <SinglePage />
            </Layout>
          } />

          {/* صفحة المدونة */}
          <Route path="/journal/april" element={
            <Layout>
              <JournalPage />
            </Layout>
          } />

          {/* صفحة السلة */}
          <Route path="/cart" element={
            <Layout>
              <CartHold />
              <Cart />
              <CartTotal />
              <CartPageFaq />
              <CartPageFooter />
            </Layout>
          } />

          {/* صفحات أخرى */}
          <Route path="/under20" element={
            <Layout>
              <Under20 />
            </Layout>
          } />
          <Route path="/under40" element={
            <Layout>
              <Under10 />
            </Layout>
          } />
          <Route path="/forher" element={
            <Layout>
              <ForHer />
            </Layout>
          } />
          <Route path="/forhim" element={
            <Layout>
              <ForHim />
            </Layout>
          } />
          <Route path="/login" element={
            <Layout>
              <LoginPage />
            </Layout>
          } />
          <Route path="/profile" element={
            <Layout>
              <ProfilePage />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
