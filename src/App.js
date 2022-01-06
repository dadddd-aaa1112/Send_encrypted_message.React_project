import './App.css'
import About from "./components/About";
import Create from "./components/Create";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Note from "./components/Note";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {

    return (
        <div className="main">
            <BrowserRouter>

                <Header/>
                <div className="container pt-4">
                <Routes>
                    <Route exact="true" path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route exact="true" path="/note" element={<Note/>}/>
                    <Route exact="true" path="/note/:noteUrl" element={<Note/>}/>


                    <Route path="*" element={<Error/>}/>


                </Routes>
                </div>
            </BrowserRouter>

            <Footer/>
        </div>
    )
}

export default App