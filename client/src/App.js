import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import Features from "./pages/Features";
import CheckerResult from "./pages/CheckerResult";
import Checker from "./pages/Checker";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/features":
        title = "";
        metaDescription = "";
        break;
      case "/checker-result":
        title = "";
        metaDescription = "";
        break;
      case "/checker":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login-page" element={<LogInPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/checker-result/:result" element={<CheckerResult />} />
      <Route path="/checker" element={<Checker />} />
    </Routes>
  );
}
export default App;
