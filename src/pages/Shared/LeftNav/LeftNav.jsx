import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../redux-toolkit/createApis/createApi";

const LeftNav = () => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="pt-4">
      <h4>All Category</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/categories/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
