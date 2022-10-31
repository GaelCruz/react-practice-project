import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Navbar />

        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
