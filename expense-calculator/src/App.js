import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
        <h1>Expense Calculator</h1>
        <div>
          <p>This is a caculator to help you do summations on your expenses and give you a summary of the expenses incurred.</p>
        </div>
    </div>
  );
}

export default App;
