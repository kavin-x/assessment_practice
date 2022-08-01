
import './App.css';
import Header from './components/header/Header';
import UserDisplay from './components/userDsiplay/UserDisplay';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Expenses from './components/expenses/Expenses';
function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Routes>
        <Route path="/" element={<UserDisplay />} />
      </Routes>
      <Routes>
        <Route path="/expenses" element={<Expenses/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
