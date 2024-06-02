import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Layout from "./components/layout";
import BlogPage from "./components/Blog/BlogPage";
import AuthorPage from "./components/Authors/AuthorPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
