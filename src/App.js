import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/products' element={<ProductList/>} />
      </Routes>
    </div>
  );
}

export default App;
