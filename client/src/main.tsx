import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Auth from "./components/Auth";
import Lobby from "./components/Lobby";
import Session from "./components/Session";
import "./styles.css";

createRoot(document.getElementById("app")!).render(<App />);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Auth />}>
            <Route path="/" element={<Lobby />} />
            <Route path="/room/:roomId" element={<Session />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div className="container">
      <div className="card not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="button">
          Go to Lobby
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="global-footer">
      <a
        href="https://github.com/hpx7/scalable-chat"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link-global"
      >
        View on GitHub
      </a>
    </div>
  );
}
