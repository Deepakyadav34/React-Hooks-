import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='bg-gray-300 w-full h-screen'>
      <h1 className="text-4xl bg-blue-600 w-300px items-center p-4 m-4">
        React Components Details
      </h1>

      <div className="flex flex-wrap rounded-xl bg-gray-500 shadow-lg w-300px h-200px p-20 m-10">
        <Link to="/useState">
          <button id="button" className="rounded-xl bg-blue-600 p-20 m-3 ">UseState</button>
        </Link>
        
        <Link to="/useEffect">
          <button id="button" className="rounded-xl bg-green-600 p-20 m-3 ">useEffect</button>
        </Link>
        
        <Link to="/useRef">
          <button id="button" className="rounded-xl bg-yellow-600 p-20 m-3 ">useRef</button>
        </Link>
        
        <Link to="/useCallback">
          <button id="button" className="rounded-xl bg-orange-300 p-20 m-3 ">UseCallback</button>
        </Link>
        
        <Link to="/customHook">
          <button id="button" className="rounded-xl bg-blue-300 p-20 m-3 ">Custom Hook</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
