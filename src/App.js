import logo from './logo.svg';
import './App.css';
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Employees from './EmployeeData/Employees';
function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
          <li>  <Link to="/" >Home</Link> </li> 
          <li> <Link to="/employees">Employee List</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/employees" element={<Employees />}  />

      
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='top-right' />
      </QueryClientProvider>
    </div>
  );
}

export default App;
