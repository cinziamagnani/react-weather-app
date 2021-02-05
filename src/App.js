import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        <a href="https://github.com/cinziamagnani/react-weather-app">Open-source code</a>, by <a href="https://cinziamagnani.com/">Cinzia Magnani</a>
      </footer>
      </div>
    </div>
  );
}

