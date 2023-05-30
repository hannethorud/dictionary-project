import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Heading</header>
        <main>
          <Dictionary />
        </main>
      </div>

      <footer className="App-footer">
        <a
          href="https://github.com/hannethorud/react-app"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Open-sourced project
        </a>{" "}
        by Hanne S. Thorud
      </footer>
    </div>
  );
}
