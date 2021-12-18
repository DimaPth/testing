import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routes } from './routes';

function App() {  

  return (
    <div className="App">
      <Routes>
        {routes.map(route => {
          return <Route key={route.path} path={route.path} element={route.component} />
        })}
      </Routes>
    </div>
  );
}

export default App;
