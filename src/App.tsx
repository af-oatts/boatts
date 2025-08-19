import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [pubKey, setPubKey] = useState("");

  const setupGreet = async () => {
    let response = await fetch("/content/hello.txt")
    if(response.ok) {
      setGreetMsg(await response.text())
    }
  }  
  const setupPubkey = async () => {
    let response = await fetch("/key.pub")
    if(response.ok) {
      setPubKey(await response.text())
    }
  }

  useEffect(() => {
    setupGreet();
    setupPubkey();
  })


  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <p>{greetMsg}</p>
      <p>{pubKey}</p>
    </main>
  );
}

export default App;
