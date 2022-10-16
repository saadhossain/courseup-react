import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { routes } from './Components/Router/Routes';

function App() {
  const router = routes;
  return (
    <div>
      <RouterProvider router={router}>
        <ToastContainer></ToastContainer>
      </RouterProvider>
    </div>
  );
}

export default App;
