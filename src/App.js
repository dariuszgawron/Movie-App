import { BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import AppRoutes from './config/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Route render={props => {
        <div>
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      }} />
    </BrowserRouter>
  );
}

export default App;
