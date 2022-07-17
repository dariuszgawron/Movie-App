import { BrowserRouter} from 'react-router-dom';

import './App.css';

import AppRoutes from './config/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <AppRoutes />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
