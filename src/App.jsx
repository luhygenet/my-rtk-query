import React from "react";
import AllProducts from "./components/AllProducts";
import OneProduct from "./components/OneProduct";
import AddProducts from "./components/AddProducts";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <OneProduct/> */}
      {/* <AddProducts /> */}
      <UpdateProduct productId = {2}/>
    </div>
  );
};

export default App;
