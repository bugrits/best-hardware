import ItemsInventory from "./features/inventory_management/ItemsInventory";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container">
        <ItemsInventory />
      </div>
      <Footer />
    </div>
  );
}

export default App;
