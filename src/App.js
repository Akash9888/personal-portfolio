import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <div className="App bg-[#242B2E]">
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
