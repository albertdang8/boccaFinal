import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import FullMenu from "./pages/FullMenu";
import Home from "./pages/Home";

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
