import React from "react";
import { useGetOneProductQuery } from "../app/services/dummyData";

const OneProduct = () => {
  const { data, isLoading, isError } = useGetOneProductQuery(2);
  console.log(data);
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>Oops an error getting this one product</h1>;
  }
  return (
    <>
      <h1>{data.brand}</h1>
      <h3>{data.category}</h3>
      <p>{data.description}</p>
    </>
  );
};

export default OneProduct;
