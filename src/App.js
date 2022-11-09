import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Maincontent from "./components/Maincontent";

function App() {
  return (
    <div className="App">
      <ExpenseItem />

      <Maincontent />
    </div>
  );
}

export default App;
