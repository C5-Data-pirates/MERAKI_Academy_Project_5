import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import REGISTER from "./component/REGISTER";
import CategoryBar from "./component/CategoryBar/index"
import GetProdact from "./component/prodact";
function App() {
  return (
    <div className="App">
      <CategoryBar/>
      <Link to="/rigester">rigester</Link>
      <Routes>
        <Route path="/rigester" element={<REGISTER />} />
        {/* shishany put page of products inside route below */}
        <Route path="/category/:id/products" element={<GetProdact/>}/>  
      </Routes>
    </div>
  );
}

export default App;
