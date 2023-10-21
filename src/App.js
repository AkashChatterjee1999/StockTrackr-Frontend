import './App.css';
import Dashboard from './pages/Dashboard';
import DefaultLayout from './layouts/DefaultLayout';
import StockListings from './pages/StockListings';
import TradingPage from './pages/TradingPage';
import OrdersTable from './pages/OrdersTable';
import Profile from './pages/Profile';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

// const router = createBrowserRouter([
//   { path: "/", element: <Dashboard/> },
//   { path: "/stocks", element: <StockListings/> },
//   { path: "/trading/:stockSymbol", element: <TradingPage/> },
//   { path: "/orders", element: <OrdersTable/> },
//   { path: "/profile", element: <Profile/> },
// ]);

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>  
          <Route exact path='/' element={< Dashboard />}></Route>  
          <Route exact path='/stocks' element={< StockListings />}></Route>  
          <Route exact path='/trading/:stockSymbol' element={< TradingPage />}></Route>  
          <Route exact path='/orders' element={< OrdersTable />}></Route>  
          <Route exact path='/profile' element={< Profile />}></Route>  
        </Routes>  
      </DefaultLayout>
    </Router>
  );
}

export default App;
