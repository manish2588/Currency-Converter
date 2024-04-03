
import "./App.css";
import CurrencyConverter from "./components/currency-convertor"; // Correct import

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConverter /> {/* Correct component name */}
      </div>
    </div>
  );
}

export default App;

