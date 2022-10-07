import Navbar from "./Components/Navbar/Navbar";
import ShopSection from "./Components/ShopSection/ShopSection";
import { CartProvider } from "./Context/Cart";

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Navbar/>
    <ShopSection/>
    </div>
    </CartProvider>
  );
}

export default App;
