// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import { IdentityProvider } from './providers/IdentityProvider';
import RouteProvider from './providers/RouteProvider';

function App() {
  return (
    <>
      <IdentityProvider>
        <Router>
          <RouteProvider />
        </Router>
      </IdentityProvider>
    </>

  );
}

export default App;
