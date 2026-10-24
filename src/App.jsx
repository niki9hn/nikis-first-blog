import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
