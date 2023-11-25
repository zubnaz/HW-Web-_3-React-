import logo from './logo.svg';
import './App.css';
import Layout from './pages/layout';
import Menu from './pages/menu';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
