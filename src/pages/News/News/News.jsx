import React from "react";
import { useGetSingleNewsQuery } from "../../../redux-toolkit/createApis/createApi";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const { newsId } = useParams();
  const { data: news, isLoading } = useGetSingleNewsQuery(newsId);

  const { title, details, image_url, category_id } = news || {};

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/categories/${category_id}`}>
            <Button variant="primary">
              <FaArrowLeft /> All News is this Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights />
    </div>
  );
};

export default News;
