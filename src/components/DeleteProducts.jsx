import React from "react";
import { useDeleteProductMutation } from "../app/services/dummyData";

const DeleteProducts = ({ productId }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();
  if (error) {
    return <p>opps and error adding this product</p>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.log("oops caught error deleting");
    }
  };
  return (
    <div>
      <div>{data?.title ? `${data.title} successfully deleted` : ""}</div>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete
      </button>
    </div>
  );
};

export default DeleteProducts;
