import ItemsInventory from "./features/inventory_management/ItemsInventory";
import Header from "./Header";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container">
        <ItemsInventory />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
