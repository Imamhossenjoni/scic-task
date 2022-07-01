import { Routes, Route} from "react-router-dom";
import './App.css';
import Calender from "./pages/Calender/Calender";
import CompletedTask from "./pages/Completed/CompletedTask";
import Home from "./pages/Home/Home";
import Footer from "./pages/shared/Footer";
import Navbar from './pages/shared/Navbar';
import NoFound from "./pages/shared/NoFound";
import EditList from "./pages/ToDo/EditList";
import ToDo from "./pages/ToDo/ToDo";
import TodoForm from "./pages/ToDo/TodoForm";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/home' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/update/:id' element={<EditList></EditList>}></Route>
        <Route path="*" element={<NoFound></NoFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
