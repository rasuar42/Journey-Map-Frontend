import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './config/firebase.config'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);