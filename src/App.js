import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className="App bg-[#242B2E]">
            <Navigation />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
