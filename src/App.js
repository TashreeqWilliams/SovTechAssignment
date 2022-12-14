import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro/Intro"
import './App.css'
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
