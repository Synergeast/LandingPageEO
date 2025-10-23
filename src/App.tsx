import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


import NotFoundException from "./components/NotFoundException.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>


                <Route path="*" element={<NotFoundException/>}/>

            </Routes>
        </Router>
    );
}

export default App;
