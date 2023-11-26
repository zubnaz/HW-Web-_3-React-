import logo from './logo.svg';
import './App.css';
import Layout from './pages/layout';
import Menu from './pages/menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MorePictures from './pages/more-pictures';
import AddPictures from './pages/add-picture';
import Register from './pages/register-page-elements/register-page';
import Login from './pages/login-page-elements/login-page';
import Comments from './pages/more-page-components/comments';
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
        <Route path="more-pictures" element={<MorePictures />}></Route>
        <Route path="add-picture" element={<AddPictures />}></Route>
        <Route path="register-account" element={<Register />}></Route>
        <Route path="login-account" element={<Login />}></Route>

        <Route path={`more-pictures/picture/:id`} element={<Comments painting={":id"} />}></Route>
      </Routes>

    </div>
  );
}

export default App;
