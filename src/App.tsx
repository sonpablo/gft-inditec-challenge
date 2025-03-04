import { BrowserRouter } from 'react-router';
import './App.css';
import { AppHeader } from './components/app-header/app-header';
import { AppContext } from './providers/app-context';
import { AppRoutes } from './Routes';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <AppHeader />
        <main className="app-main">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
