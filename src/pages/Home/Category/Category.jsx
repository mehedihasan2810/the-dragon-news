import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetAllNewsQuery,
  useGetCategoryQuery,
} from "../../../redux-toolkit/createApis/createApi";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { categoryId } = useParams();
  const { data: categoryNews, isLoading } = useGetCategoryQuery(categoryId);
  const { data: allNews, isLoading: isAllNewsLoading } = useGetAllNewsQuery();

  if (isLoading || isAllNewsLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {categoryId && <h1>Category {categoryNews.length}</h1>}
      {(categoryId ? categoryNews : allNews).map((news) => (
        <NewsCard key={news._id} {...news} />
      ))}
    </div>
  );
};

export default Category;
