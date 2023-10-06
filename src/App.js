import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import DefaultLayout from './layouts/DefaultLayout';
import StockListings from './pages/StockListings';
import TradingPage from './pages/TradingPage';
import OrdersTable from './pages/OrdersTable';
import Profile from './pages/Profile';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route eaxct path="/stocks" element={<StockListings/>} />
        <Route path="/trading/:stockSymbol" element={<TradingPage/>} />
        <Route exact path="/orders" element={<OrdersTable/>} />
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
