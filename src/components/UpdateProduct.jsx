import React from "react";
import { useUpdateProductMutation } from "../app/services/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { error, isLoading, data }] =
    useUpdateProductMutation();

  if (error) {
    <h1>oops error in updating product</h1>;
  }
  if (isLoading) {
  }
  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "new title gang",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.log(`error updating prod:${err}`);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct}>Update product</button>
    </div>
  );
};

export default UpdateProduct;
