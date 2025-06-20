import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="w-4/5 justify-center mx-auto mt-4 mb-4">
        {
          <MyRoutes />
        }
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
