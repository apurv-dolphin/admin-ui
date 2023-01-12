import "./App.css";
import SiderBar from "./SiderBar";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./component/Dashboard/DashBoard";
import Buttons from "./component/Button/Buttons";
import Cards from "./component/Card/Cards";
import Color from "./component/Color/Color";
import Border from "./component/Border/Border";
import Animation from "./component/Animation/Animation";
import Others from "./component/Other/Other";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Other from "./component/Other/Other";
import BlankPage from "./component/BlankPage/BlankPage";
import Error from "./component/Error/Error";
import ForgotPassword from "./component/ForgotPassword/ForgotPassword";
import Tables from "./component/Tables/Tables";
import Charts from "./component/Charts/Charts";

function App() {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="main-container">
          <div className="col-md-3">
            <div className="sidebar">
              <SiderBar />
            </div>
          </div>
          <div className="col-md-9" style={{ width: "100vw" }}>
            <div className="header-block">
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/colors" element={<Color />} />
              <Route path="/borders" element={<Border />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/others" element={<Others />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/other" element={<Other />} />
              <Route path="/blankpage" element={<BlankPage />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <div>
              <ScrollToTop />
            </div>
            <div className="footer-block">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
