import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Sections/Signup";
import NoCar from "./Sections/NoCar";
import About from "./Sections/About";
import Why from "./Sections/Why";
import Guide from "./Sections/Guide";
import Insurance from "./Sections/Insurance";
import Questions from "./Sections/Questions";
import Interested from "./Sections/Interested";

function App() {
  return (
    <div className="App">
      <Signup></Signup>
      <NoCar></NoCar>
      <About />
      <Why></Why>
      <Guide></Guide>
      <Insurance></Insurance>
      <Questions></Questions>
      <Interested></Interested>
      <footer className="footer">
        <a
          href="https://github.com/fasafanoff/https---github.com-fasafanoff-lyftclone"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    </div>
  );
}

export default App;
