import Inventory from "./features/inventory_management/Inventory";
import Header from "./Header";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container">
        <Inventory />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
