import './App.css';
import Create from './create';
import Read from './read';
import Update from './update';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/read">Read</Link>
          </li>
          {/* Use a function to dynamically create the Update link */}
          <li>
            <Link to={getUpdateLinkWithId(1)}>Update</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

// Define a function to create the Update link with the provided ID
function getUpdateLinkWithId(id) {
  return `/update/${id}`;
}

export default App;
