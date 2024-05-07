import Navigation from "./components/Navigation.component";
import Home from "./components/home.component";
import Products from "./components/products.component";
import Posts from "./components/posts.component";
import Admin from "./components/admin.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/admins" element={<Admin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
