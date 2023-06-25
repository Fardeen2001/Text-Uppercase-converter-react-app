import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <TextArea heading="Enter your text below" />
      </div>
    </>
  );
}

export default App;
