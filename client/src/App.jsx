import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      {/* Main Content Area */}
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
