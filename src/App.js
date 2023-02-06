import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent
          text="More"
          color="#61dafb"
          bgcolo="white"
          fontsize="1.2em"
          border="25px"
          cursor="pointer"
          padding="5px 20px"
          margin="15px"
        />
        <ImageComponent
          src="https://th.bing.com/th/id/OIP.dCKbodeEWBDCryofpMS4CgHaCh?pid=ImgDet&rs=1"
          alt="ReactImg"
          border="25px"
          margin="15px"
        />
      </header>
    </div>
  );
}

export default App;
