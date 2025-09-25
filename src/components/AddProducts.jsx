import React from "react";
import { useAddAproductMutation } from "../app/services/dummyData";

const AddProducts = () => {
  const [addNewProduct, { error, isLoading, data }] = useAddAproductMutation();
  if (error) {
    return <p>opps and error adding this product</p>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProd = {
        id: 1,
        title: "My new shoes",
        description: "Maybe we can go but them tmrw, little shopping trip",
      };

      await addNewProduct(newProd);
    } catch (err) {
      console.log(`an error : ${err}`);
    }
  };

  return (
    <div>
      <div>{data?.id}</div>
      <div>{data?.title}</div>
      <div>{data?.description}</div>
      <button onClick={handleAddProduct}>Add a Product</button>
    </div>
  );
};

export default AddProducts;
