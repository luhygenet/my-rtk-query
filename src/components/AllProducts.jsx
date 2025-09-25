import React from "react";
import { useGetAllProductQuery } from "../app/services/dummyData";

const AllProducts = () => {
  const { isLoading, isError, data } = useGetAllProductQuery();
  if (isError) {
    return <p>oops! an error pookie</p>;
  }
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      {data ? (data.products.map((p) => (
        <>
          <h1 key={p.id}>{p.title}</h1>
          <p>{p.description}</p>
        </>
      ))) : <p>no data?</p>}
    </div>
  );
};

export default AllProducts;
