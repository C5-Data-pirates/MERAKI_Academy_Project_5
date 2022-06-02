import "./App.css";

import {Routes,Route} from "react-router-dom"
import  {NavBar}  from "./component/NavBar";
import Prodact from "./component/prodact";
function App() {
  return <div className="App">
    <NavBar/>
<Routes>

<Route path={"/category/products"} element={<Prodact />} />






















{/* malek */}

















































</Routes>

  </div>;
}

export default App;
