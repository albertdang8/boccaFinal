import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullMenu from "./pages/FullMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" element={<FullMenu />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
