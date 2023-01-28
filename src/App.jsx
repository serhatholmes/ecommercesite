import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Outlet /> */}
          </Routes>
        </>
      </ShopContextProvider>
    </div>
  );
}

export default App;
