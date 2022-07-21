import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';

import './App.css';

/** App for managing a Jobs Board.
 *
 * Props: None
 * State: None
 *
 * App -> (<Nav/> | <RoutesList/>)
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
