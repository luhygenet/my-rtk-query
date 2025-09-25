import React from "react";
import AllProducts from "./components/AllProducts";
import OneProduct from "./components/OneProduct";
import AddProducts from "./components/AddProducts";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProducts from "./components/DeleteProducts";

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <OneProduct/> */}
      {/* <AddProducts /> */}
      {/* <UpdateProduct productId = {2}/> */}
      <DeleteProducts productId = {4}/>
    </div>
  );
};

export default App;
