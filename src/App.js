
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Private from './component/private/Private';
import About from './component/about/About';
import Blog from './component/blog/Blog';
import NotFound from './component/notfound/NotFound';
function App() {
  return (
    <div className="App">
      <h1>Welcome To Componentes</h1>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/notfound' element={<NotFound/>}/>
        <Route path='/' element={<Private/>}>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
