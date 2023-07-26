import {BrowserRouter, Routes, Route } from 'react-router-dom';
import routesConfig from './routes/routesConfig';

import HeaderMenu from './components/HeaderMenu';

import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
      <HeaderMenu></HeaderMenu>
        <Routes>
          {routesConfig.map((route, index) =>(
          <Route 
            key={index}
            path={route.path}
            element={route.element}></Route>
          ))}
        </Routes>
        </div>
      </BrowserRouter> 
    </>
  );
}

export default App;
