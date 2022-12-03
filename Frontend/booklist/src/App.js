import './App.css';
import './Components/BookList.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';
import BooksRecord from './Components/BooksRecord';
import EditBook from './Components/EditBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/booklistPage" element={<BookList/>}/>
        <Route path="/addBookPage" element={<AddBook/>}/>
        <Route path="/bookRecordPage" element={<BooksRecord/>}/>
        <Route path="/editBookPage" element={<EditBook/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
